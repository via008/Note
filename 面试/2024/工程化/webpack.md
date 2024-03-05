### 4-5 步骤以及遇到的问题？

步骤：

1. 升级所有的 `plugin` 和 `loader`

- `html-webpack-plugin` 打包生成 `html` 文件加载其他打包出来的 `bundles`
- `mini-css-extract-plugin` 打包时将 `css` 从 `js` 中抽取出来（按需加载、sourceMap）
- `antd-dayjs-webpack-plugin` 用 `dayjs` 替换 `moment`，优化打包体积
- `babel-loader` 没变
- `css-loader` 对 `@import` 和 `url()` 进行处理，就像 `js` 解析 `import/require()` 一样
- `file-loader` 去掉，使用 `asset module`
- `less-loader`、`postcss-loader`、`sass-loader`、`style-loader`、`raw-loader` 等不变

2. 配置项用法升级
3. 清理一些设置为默认配置的配置

使用的新特性：
1. `cache.type = 'filesystem'` 使用文件系统作为 `webpack` 的缓存存储方式，可以避免在内存中存储大量的缓存数据

### 
