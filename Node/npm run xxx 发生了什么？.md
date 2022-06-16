## `npm run xxx` 之后发生了什么？

`npm run xxx` 会在项目中的 `package.json` 文件中的 `script` 里找到对应的 `xxx`，然后执行 `xxx` 命令。比如：

```
"script": {
  "dev": "cross-env APP_ENV=dev node build/start.js"
}
```

## 为啥不直接执行命令？而要写成 `npm run xxx`？

如果 `cross-env` 没有全局安装的话，会报指令找不到的错误。

## 那为啥 `npm run xxx` 之后就不会报指令找不到的错误？

在 `npm i xxx` 安装依赖的时候，会在 `node_modules/.bin` 目录中创建好同名的几个可执行文件。

`.bin` 目录不是指任何一个 `npm` 包。目录下的文件，表示一个个软链接（根据 `xxx` 包的 `package.json` 中的 `bin` 来链接的）。

由此可以知道，当使用 `npm run dev` 时，虽然没有全局安装 `cross-env` 命令，但是 `npm` 会在 `./node_modules/.bin` 中找到 `cross-env` 文件作为脚本来执行。相当于执行了 `./node_modules/.bin/cross-env APP_ENV=dev node build/start.js`。

在 `npm install` 时，`npm` 读到 `bin` 配置后，就将该文件的链接到 `./node_modules/.bin` 目录下，而 `npm` 还会自动把 `node_modules/.bin` 加入到 `$PATH`，这样就可以直接作为命令依赖程序和开发依赖程序，不用全局安装了。

## 总结

1. 运行 `npm run xxx` 时，`npm` 会在当前目录的 `node_modules/.bin` 查找要执行的程序，如果找到则执行；
2. 没有找到则从全局的 `node_modules/.bin` 中查找，`npm i -g xxx` 就是安装到全局目录；
3. 如果全局目录中还没找到，那么就从 `path` 环境变量中查找有没有其他同名的可执行程序。
