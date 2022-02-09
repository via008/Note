### offsetParent

- 只读属性
- 返回一个指向最近的包含该元素的**定位元素**或者最近的**table、td、th、body**元素
- 当元素的`style.display`设置为`none`时，`offsetParent`返回`null`

##### 兼容

- `Webkit`内核中，如果元素为隐藏（该元素或其祖先元素的`style.display`设置为`none`），或者`style.position`设置为`fixed`，则`offsetParent`返回`null`
- IE9 中，如果该元素设置`style.position`为`fixed`，则该元素返回`null`（`display:none`无影响）

### offsetTop

- 只读属性
- 返回当前元素相对于其`offsetParent`元素的顶部内边距的距离

### offsetLeft

- 只读属性
- 返回当前元素左上角相对于其`offsetParent`节点的左边界偏移的像素值

### offsetHeight

- 只读属性
- 整数（四舍五入）
- 返回元素的像素高度，高度包含元素的边框、垂直内边距、水平滚动条（如果存在并且渲染的话
- 不包含伪类元素`::before`和`::after`的高度
- 如果元素被隐藏（该元素或祖先元素设置`display:none`），则返回 0

### offsetWidth

- 只读元素
- 整数（四舍五入）
- 返回元素的布局宽度，通常包括元素的边框、水平线上的内边距、竖直方向上的滚动条、以及 CSS 设置的`width`值

### 相对于块级元素来说

对于块级元素来说，`offsetTop`,`offsetLeft`,`offsetHeight`,`offsetWidth`描述了元素相对于`offsetParent`的边界框。

### 相对于行内元素来说

如下例子中，第二个行内元素`span`中的内容会被截断到下一行：

```
<!--CSS-->
#box {
    width: 200px;
    height: 100px;
    border: 1px solid black;
}

<!--DOM结构-->
<div id="box">
    <span>这是一个元数茶空间和</span>
    <span id="long">你看成就感SDK差不多就开会桑爆炒江湖撒岽哥保存接口稍等哈</span>
</div>
```

行内元素中，`offsetTop`和`offsetLeft`描述的是第一个边界框的位置（即用`Element.getClientRects`获取到的`ClientRect`对象集合的第一个对象的`top`和`left`）。

`offsetWidth`和`offsetHeight`描述的是边界框的尺寸（即使用`Element.getBoundingClientRect`获取到的 `width`和`height`）。
