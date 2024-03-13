## flex 基础概念

通常被称为 `flexbox`，是一种一维布局模型（一次只能处理一个维度上的元素布局），它给 `flexbox` 的子元素之间提供了强大的 **空间分布** 和 **对齐** 能力。

### `flexbox` 的两根轴线

#### 主轴

主轴由 `flex-direction` 定义，可以取四个值：

- row
- row-reverse
- column
- column-reverse

#### 交叉轴

交叉轴垂直于主轴

### 起始线和终止线

`flexbox` 不会对文档的书写模式提供假设。过去，`CSS` 的书写模式主要被认为是水平的，从左到右的。现代的的布局方式涵盖了书写模式的范围，所以我们不再假设一行文字是从文档的左上角开始向右书写，新的行也不是必须出现在另一行的下面。

### `flex` 容器

将 `display: flex/inline-flex`，即创建了一个 `flex` 容器，容器中的直系子元素会变为 `flex` 元素。由于所有的 `css` 属性都会有一个初始值，所以 `flex` 容器中的所有 `flex` 元素都会有如下行为：

- 元素排列为一行（`flex-direction` 属性的初始值为 `row`）
- 元素从主轴的起始线开始
- 元素不会在主维度方向拉伸，但是可以缩小
- 元素被拉伸来填充交叉轴上大小
- `flex-basis` 属性为 `auto`
- `flex-wrap` 属性为 `nowrap`

这会让元素呈线性排列，并且把自己的大小当做作为主轴的大小。如果太多元素超出容器，会溢出而不会换行。如果一些元素比其他元素高，那么元素会沿交叉轴被拉伸来填满它的大小。

#### 更改 `flex` 方向 `flex-direction`

- `row-reverse` 沿着行的方向展示，但起始线和终止线位置会交换
- `column` 主轴和交叉轴交换，元素沿着列的方向展示
- `column-reverse` 沿着列的方向展示，起始线和终止线位置交换

#### `flex-wrap` 实现多行 `flex` 容器

将 `flex-wrap` 设置为 `wrap`，如果元素太大无法在一行显示，则会换行显示。

#### 简写属性 `flex-flow`

可以将 `flex-direction` 和 `flex-wrap` 组合为简写属性 `flex-flow`。第一个值指定 `flex-direction`，第二个值指定 `flex-wrap`。

### `flex` 元素上的属性

- `flex-grow`
- `flex-shrink`
- `flex-basis`

控制 **可用空间** （元素按照正常尺寸排列之后剩下的空间）在这元素上间如何分配。

#### `flex-basis`

定义元素的空间大小，该属性默认值为 `auto`，此时浏览器会检测这个元素是否具有具体的尺寸（`width`等）。如果没有给元素设置尺寸，`flex-basis` 采用元素内容的尺寸。

如果一个元素同时被设置了 `flex-basis` 和 `width`，`flex-basis` 优先级更高。

#### `flex-grow`

若被赋值一个正整数，`flex` 元素会以 `flex-basis` 为基础，沿主轴方向增长尺寸。

#### `flex-shrink`

处理 `flex` 元素收缩的问题。

#### 简写成 `flex`

顺序为 `flex-grow`、`flex-shrink`、`flex-basis`。

- `flex: initial` === `flex: 0 1 auto`
- `flex: auto` === `flex: 1 1 auto`
- `flex: none` === `flex: 0 0 auto`
- `flex: 1` === `flex: 1 1 0`
- `flex: 2` === `flex: 2 1 0`

### 元素的对齐和空间分配

`flexbox` 的一个关键特性是能够设置 `flex` 元素沿主轴方向和交叉轴方向的对齐方式，以及他们之间的空间分配。

#### `align-items`

使元素在交叉轴方向对齐。初始值为 `stretch`。

- `stretch`
- `flex-start`
- `flex-end`
- `center`

#### `justify-content`

使元素在主轴方向对齐。初始值 `flex-start`。

- `stretch`
- `flex-start`
- `flex-end`
- `center`
- `space-around`
- `space-between`


