## 问题描述

使用组件：上传文件组件

组件库：`bpm-widgets-ui`(提供上传文件组件)

背景：组件库与项目共享一个 `axios` 实例，将 `axios` 实例挂载到 `window` 上，如下：

```
// 项目中 api.js
const newDesignerAxios = new Axios({
  //...
});
window.DAxiosIntance = newDesignerAxios;

// 组件库中 api.js
const newDesignerAxios = window.DAxiosIntance || {};
```

问题现象：组件库中获取 `window.DAxiosIntance` 操作先于项目中的赋值操作，导致组件库中拿到的 `window.DAxiosIntance` 是 `undefined`

原因：我们使用标准 `import` 导入的模块是静态的，会使所有被导入的模块，在加载时就被编译。

公用方法 `utils` 下面导出内容是有一个总的 `index.js`，用来导出所有 `utils` 下面的方法，别的组件在使用的时候直接导入 `utils` 下面的 `index.js`，其中有 `utils` 方法中有方法引用了 `api.js` 的方法，导致 `api.js` 被导入并编译，`const newDesignerAxios = window.DAxiosIntance || {};` 代码先于项目中的赋值代码 `window.DAxiosIntance = newDesignerAxios;` 执行。
