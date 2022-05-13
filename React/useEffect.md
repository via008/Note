### 作用

用于勾住函数中某些生命周期函数。

### 都能勾住哪些生命周期函数？

- componentDidMount
- componentDidUpdate
- componentWillUnmount

### 为什么是这三个生命周期函数？

因为修改数据我们可以用到 `useState`，修改数据会触发组件的重新渲染，上面三个是与**组件渲染关联最紧密**的生命周期。
