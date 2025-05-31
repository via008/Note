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
