### `sourcemap` 是什么？

编译后的代码和源码的一一对应，通过一个个行列号的**映射**。

`sourcemap` 格式如下：

```
  {
    version: 3,
    // 文件名
    file: 'static/js/1.22c9a7fe.chunk.js',
    // 源码根路径
    sourceRoot: '',
    // 源码文件
    sources: ['a.js', 'b.js'],
    // 转换前的变量名
    names: ['a', 'b'],
    // 位置映射
    mappings: 'oHAEA,IAAIA,EAAeC;EAAQ',
    // 每个 source 对应的源码的内容
    sourcesContent: ['const a = 1; console.log(a)', 'const b = 2; console.log(b)']
  }
```

为什么 `sources` 可以有多个？因为编译产物可能是多个源文件合并的，比如打包，一个 `bundle.js` 就对应了 `n` 个 `sources` 源文件。

为什么把变量名单独摘到 `names` 里呢？因为这样可以通过数组下标来索引，`mapping` 就不用保存变量名了，只保留 `names` 的索引就行。

重点是 `mappings` 部分，`mappings` 部分是通过分号 `;` 和逗号 `,` 分隔的：

`mappings: 'oHAEA,IAAIA,EAAeC;EAAQ'`

一个分号就代表一行，这样就免去了行的映射。每一行可能有多个位置的映射，用 `,` 分隔。

具体的每一个 `mapping` 是啥呢？比如 `oHAEA`[VLQ 编码] 一共五位，分别有不同的含义：

- 转换后代码的第几列（第几行通过分号来确定）
- 转换前的哪个源码文件，保存在 `sources` 里，通过下标来索引
- 转换前的源码的第几行
- 转换前的源码的第几列
- 转换前的源码的哪个变量名，保存在 `names` 里，通过下标索引

其实就是一一映射编译后代码的位置和源码的位置。

### `webpack` 的几种 `sourcemap` 配置

`webpack` 是 `eval`、`cheap`、`nosources`、`inline`、`source-map` 等基础配置的组合。

#### `eval`

`eval` 是动态执行 `JS` 代码的。比如：

```
eval(`
  function add(a, b) {
    return a + b;
  }
  console.log(add(1, 2));
`)
```

但是 `eval` 的代码打不了断点。

如何解决这个问题呢？浏览器支持了这样一种特性，只要在 `eval` 代码最后加上 `//# sourceURL=xxx`，就会以 xxx 为名字把这段代码加到 `sources` 里。

`webpack` 就是利用了 `eval` 这个特性来优化 `sourcemap` 生成的性能，比如可以指定 `devtool` 为 `eval`，生成的代码就是每个模块都被 `eval` 包裹着，并且用 `sourceUrl` 来指定文件名。

这样做的好处就是快，只要指定文件名就行，不需要生成 `sourcemap`。不过这样做只是把每个模块的代码分了出去，并没有做源码的关联，如果想关联源码，可以再开启 `sourcemap`：

```
devtool: 'eval-source-map'
```

则生成的代码也是用 `eval` 包裹的，但除了 `sourceUrl` 之外，还有 `sourceMappingUrl`，再运行时除了 `eval` 的代码会生成文件放在 `sources` 外，还会做 `sourceMap` 的映射。

### `source-map`

`source-map` 的配置是生成独立的 `sourcemap` 文件。可以关联也可以不关联，比如加上 `hidden`，就是生成 `sourcemap` 但不关联。

生产环境就不需要关联 `source-map`，但可能需要生成 `source-map` 文件，把他上传到错误管理平台之类的，用来映射线上代码报错位置到对应的源码。

还可以配置成 `inline` 的，就是通过 `dataUrl` 的方式内联在打包后的文件里。

### `cheap`

`sourcemap` 之所以慢，主要是处理映射比较慢，很多情况下我们不需要映射到源码的行和列，只要精确到行就行，这个时候就可以用 `cheap`。

### `module`

`webpack` 中对一个模块会进行多次处理，比如经过 `loaderA` 做一次转换，再用 `loaderB` 做一次转换，之后打包到一起。

每次转换都会生成一个 `sourcemap`，那也就是会有多个 `sourcemap`。默认 `sourcemap` 只能从 `bundle` 关联到模块代码，也就之关联了最后那个 `sourcemap`。

如果想调试最初的代码，则我们可以配置 `module`，即 `cheap-module-source-map`。还需要配置下 `source-map-loader`，它的作用就是读取源码的 `sourcemap`，传递给后面的 `loader`。

### `nosources`

`sourcemap` 里是有 `sourcesContent` 部分的，也就是直接把源码贴到这里，这样的好处就是根据文件路径找不到文件，也可以做映射。但这样会增加 `sourcemap` 的体积。

如果能确定可以通过文件路径找到源文件，不生成 `sourcesContent` 也可以。即 `nosources-source-map`。

### 最佳实践

`webpack` 按照这个正则来匹配校验：^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$。

- 线上：`hidden-source-map`，不关联 `sourcemap`，但要生成 `sourcemap`，不大需要 `module` 来映射回最初的源码
- 开发：`eval-cheap-module-source-map`，开发的时候可以用 `eval` 的方式，这样是每个模块单独做映射，不用从 `bundle.js` 开始映射，然后 `cheap` 也可以开启，只映射到源码的某一行，提升生成速度，一般需要 `module` 来映射回最初的源码。

### 总结

`webpack` 的 `sourcemap` 配置是按照一定顺序的组合，理解了基础配置，知道了怎么组合就理解了各种 `devtool` 配置。

- `eval`：浏览器 `devtool` 支持通过 `sourceUrl` 来把 `eval` 的内容单独生成文件，还可以进一步通过 `sourceMappingUrl` 来映射回源码，`webpack` 利用这个特性来简化 `sourcemap` 的处理，可以直接从模块开始映射，不用从 `bundle` 级别
- `cheap`：只映射到某一行，不用精确到列，这样可以提升 `sourcemap` 生成速度
- `source-map`：生成 `sourcemap` 文件，可以配置 `inline`，会以 `dataURL` 的方式内联，可以配置 `hidden`，只生成 `sourcemap`，不和生成的文件关联
- `nosources`：不生成 `sourceContent` 内容，可以减少 `sourcemap` 文件的大小
- `module`：`sourcemap` 生成时会关联每一步 `loader` 生成的 `sourcemap`，配合 `sourcemap-loader` 可以映射回最初的源码

理解了这些基础配置项，根据 `^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$` 的规律来进行组合，就可以实现各种需求下的 `sourcemap` 配置。

当然，这种 `sourcemap` 配置还不够细致，比如 `sourcemap` 的 `url` 怎么生成，文件名是什么。如果想对这些做配置，可以关掉 `devtool`，启用 `SourceMapDevToolPlugin` 来配置。

参考：[彻底搞懂 Webpack 的 sourcemap 配置原理](https://zhuanlan.zhihu.com/p/558069023?utm_id=0)
