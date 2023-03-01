## npm 安装原理步骤

1. 检查 `config`
2. 查看是否有 `package-lock.json` 文件

- 若有，则查看是否和 `package.json` 声明一致
  - 若不一致，按情况如下：
    - `npm` 为 `5.0.x`：按照 `package-lock.json` 下载
    - `npm` 为 `5.1.0`-`5.4.2`：当有符合 `package.json` 声明的更新版本时，则根据 `package.json` 下载，并更新 `package-lock.json`
    - `npm` 大于 `5.4.2`：若 `package-lock.json` 与 `package.json` 版本兼容，则按照 `package-lock.json` 下载；若不兼容，则按照 `package.json` 下载，并更新 `package-lock.json`
  - 若一致，则同步骤 3
- 若无，则先获取包信息、构建依赖树（包括扁平化），然后同步骤 3

3. 检查缓存

- 有缓存，则直接解压到 `node_modules`，并生成 `package-lock.json` 文件
- 无缓存，下载包资源，检查完整性（添加到缓存），然后解压到 `node_modules`，并生成 `package-lock.json` 文件
