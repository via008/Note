ES6 模块与 CommonJS 模块主要区别在于它们的加载方式和导出方式不同：

导出方式：

- ES6 模块：import 和 export 关键字导入和导出
- CommonJS 模块：require 和 module.exports 来导入和导出模块

加载方式：

- ES6 模块是静态的，意味着它们在编译时就确定了依赖关系
- CommonJS 模块是动态的，意味着它们在运行时才能确定依赖关系

其他：

- ES6 模块支持静态分析和 tree shaking，可以更好地优化代码
