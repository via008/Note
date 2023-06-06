`e.target` 指的是事件触发的元素，`e.currentTarget` 始终指向事件绑定的元素。

例子：

```html
<div id="parent" onClick="{handleClick}">
  <div id="child1"></div>
</div>
<script>
  const handleClick = (e) => {
    console.log(e.target);
    // 点击 parent 元素的时候：输出 parent 元素
    // 点击 child1 元素的时候：输出 child1 元素
    console.log(e.currentTarget);
    // 始终输出 parent 元素
  };
</script>
```

> tips: e.currentTarget 只能在事件处理过程中被使用。如果直接打印 console.log(e)，currentTarget 始终为 null，可以通过 e.currentTarget 或者 debugger 语句查看。
