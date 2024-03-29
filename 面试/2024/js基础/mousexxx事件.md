### mouseover

当鼠标在元素**本身**或者**其子元素**上**移动**时，`mouseover` 事件在该元素上触发。

### mouseenter

当鼠标**首次**移动到元素的激活区域内时，在该元素上触发。

### mousemove

当鼠标的光标在元素上移动时，在该元素上触发。

### mousedown

鼠标在元素内按下时，会在该元素上触发。

> 与 `click` 的区别：`click` 事件在完整的单击操作完成后触发；也就是说，`click` 事件在按下并释放鼠标按钮后并且指针仍在同一个元素内时触发。

### mouseup

鼠标在元素内释放时，在该元素上触发。

### mouseout

鼠标移动至元素或其子元素之外时，在该元素上触发。

当指针从一个元素移入其子元素时，因为子元素遮盖了父元素的可视区域，所以 `mouseout` 也会触发。

### mouseleave

鼠标的指针移出某个元素时触发。

> `mouseleave` 和 `mouseout` 相似，区别在于 `mouseleave` 不会冒泡，`mouseout` 会冒泡。这意味着当指针离开元素及其所有后代时，会触发 `mouseleave`；而当指针离开元素或离开元素的后代（即使指针仍在元素内）时，会触发 `mouseout`。

