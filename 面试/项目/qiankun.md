# 主子应用通信

- initGlobalState 官方提供
- 共享类 + EventBus

# 沙箱隔离

- JS 沙箱：Proxy
- CSS 沙箱：shadow DOM、Scoped CSS

# 路由冲突与嵌套路由不生效

描述：主子应用使用不同的路由方案时，可能导致 404，刷新异常。

- 主子路由解耦，子应用使用独立的 basename + 路由懒加载

# 子应用 public-path


# 远程项目版本管理

# 主子应用生命周期

- bootstrap 子应用首次挂载之前调用一次
- mount 挂载的时候执行
- unmount 卸载时执行

# 热更新失效，导致开发调试困难？

- 开发环境关闭缓存，配置 devServer 的 headers 防缓存
- 使用 dynamic publicPath 确保加载最新资源

# 公用的第三方依赖的配置

1. 版本一致
    - 主应用正常打包出去
    - 子应用配置 externals
2. 版本不一致时
    - 最简单的方式：不共享
    - 升级依赖统一版本

## 主应用加载多个 React 版本，子应用复用主应用版本

大体思路：

主应用
 └── 挂载多个版本的 React 到 window.__REACT_VERSIONS__
       ├── 16 => React16, ReactDOM16
       ├── 17 => React17, ReactDOM17
       └── 18 => React18, ReactDOM18

子应用 A（React 17）启动时：
 └── window.React = props.parentWindow.__REACT_VERSIONS__['17'].react
 └── window.ReactDOM = props.parentWindow.__REACT_VERSIONS__['17'].reactDom

子应用 B（React 18）启动时：
 └── window.React = props.parentWindow.__REACT_VERSIONS__['18'].react

### 主应用

- 安装多个 React 版本（根目录创建不同的文件夹安装多个 React 版本）
- webpack 配置别名加载

```javascript

// 主应用 webpack.config.js
resolve: {
  alias: {
    'react-16': path.resolve(__dirname, './react-16/node_modules/react'),
    'react-dom-16': path.resolve(__dirname, './react-16/node_modules/react-dom'),
    'react-17': path.resolve(__dirname, './react-17/node_modules/react'),
    'react-dom-17': path.resolve(__dirname, './react-17/node_modules/react-dom'),
    'react-18': path.resolve(__dirname, './react-18/node_modules/react'),
    'react-dom-18': path.resolve(__dirname, './react-18/node_modules/react-dom'),
  }
}

```

- 主应用注册版本仓库

```javascript

// main.js (主应用入口文件)
import React16 from 'react-16';
import ReactDOM16 from 'react-dom-16';
import React17 from 'react-17';
import ReactDOM17 from 'react-dom-17';
import React18 from 'react-18';
import ReactDOM18 from 'react-dom-18';

window.__REACT_VERSIONS__ = {
  '16': { react: React16, reactDom: ReactDOM16 },
  '17': { react: React17, reactDom: ReactDOM17 },
  '18': { react: React18, reactDom: ReactDOM18 }
};

```

### 子应用配置（动态注入）

- webpack 不打包 React

```javascript

externals: {
  react: 'React',
  'react-dom': 'ReactDOM'
}

```

- 动态注入 React 实例（子应用入口）

```javascript

export function mount(props) {
  const versions = props.parentWindow.__REACT_VERSIONS__;
  if (!versions || !versions[version]) {
    throw new Error(`React version ${version} not available`);
  }

  window.React = versions[version].react;
  window.ReactDOM = versions[version].reactDom;
}

```

子应用入口使用：

```javascript

const React = window.React;
const ReactDOM = window.ReactDOM;

ReactDOM.render(<App />, document.getElementById('root'));

```
