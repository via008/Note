### 1. vertical-align 属性值？

- 线类：baseline（默认值）、top、middle、bottom
- 文本类：text-top、text-bottom
- 上标下标类：sub、super
- 数值百分比类：20px、2em、20%等

### 2. vertical-align 起作用的前提？

只能应用于内联元素以及 `display` 值为 `table-cell` 的元素。

也就是说，`vertical-align` 属性只能作用在 `display` 为 `inline`、`inline-block`、`inline-table`、`table-cell` 的元素上。因此，默认情况下，`<span>`、`<strong>`、`<em>` 等内联元素，`<img>`、`<button>`、`<input>` 等替换元素，非 `HTML` 规范的自定义标签元素，以及 `<td>` 单元格，都是支持 `vertical-align` 属性的，其他块级元素不支持。
