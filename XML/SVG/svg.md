# 一、基础概念

可缩放矢量图形（Scalable Vector Graphics，SVG）基于 XML 标记语言，用于描述二维的矢量图形。

### XML

可扩展标记语言 (Extensible Markup Language，XML) 是一种类似于 HTML 的标记语言，但是 XML 没有使用预定义的标记。

最重要的是，因为 XML 的基本格式是标准化的，所以如果我们跨系统或平台共享或传输 XML，无论是在本地还是在互联网上，接收方仍然可以根据标准化的 XML 语法解析数据。

### 图片格式

图片格式大致分为位图、矢量图（可无损缩放）、 HDR 高动态范围图（附带光照信息的图像）、平面软件源文件这几种。

#### 矢量图

矢量图像，也称为面向对象的图像或绘图图像，在数学上定义为一系列由线连接的点。矢量文件中的图形元素称为对象。每个对象都是一个自成一体的实体，它具有颜色、形状、轮廓、大小和屏幕位置等属性。既然每个对象都是一个自成一体的实体，就可以在维持它原有清晰度和弯曲度的同时，多次移动和改变它的属性，而不会影响图例中的其它对象。

简单来说矢量图就像用几何图形来描述一幅图，在矢量图放大时，我们所记录的几何图形的各种角度、形状等并没有改变，所以无论是放大还是缩小，都不会影响矢量图的清晰度。

常用的矢量图格式：.svg

#### 位图

位图又被称作点阵图或栅格图像，它的特点就是，整幅图由许多的‘点’组成，这些‘点’我们称为“像素”。在位图模式下，计算机会将图片的每个像素点进行保存。当位图放大到一定程度时，我们会发现图片是由一个一个的小方块组成，这些小方块就是像素点。

位图的特点是可以表现色彩的变化和颜色的细微过渡，产生逼真的效果，缺点是在保存时需要记录每一个像素的位置和颜色值，占用较大的存储空间。

常用的位图格式：.gif、.png、.jpg、PS 的 .psd 等

png 和 jpg/jpeg 的区别：

- png 是一种无损压缩的位图片格式，PNG 使用从 LZ77 派生的无损数据压缩算法，一般应用于 JAVA 程序或网页中，原因是它压缩比高，生成文件体积小。
- jpg/jpeg 是一种有损压缩的格式，JPEG 的压缩方式通常是破坏性数据压缩（lossy compression），意即在压缩过程中图像的质量会遭受到可见的破坏。

#### 对比

分辨率：矢量图形与分辨率无关，可以将它缩放到任意大小和以任意分辨率在输出设备上打印出来，都不会影响清晰度。而位图是由一个一个像素点产生，当放大图像时，像素点也放大了，但每个像素点表示的颜色是单一的，所以在位图放大后就会出现咱们平时所见到的马赛克状。

色彩：矢量图形色彩比较单调，无法表现逼真的实物，矢量图常常用来表示标识、图标、Logo 等简单直接的图像。位图表现的色彩比较丰富，可以表现出色彩丰富的图象，可逼真表现自然界各类实物。

占用空间：由于位图表现的色彩比较丰富，所以占用的空间会很大，颜色信息越多，占用空间越大，图像越清晰，占用空间越大。矢量图形表现的图像颜色比较单一，所以所占用的空间会很小。

### SVG 举例

[svg 作图](https://juejin.cn/post/6844903589807128590#heading-6)

作为一个基于文本的开放网络标准，SVG 能够优雅而简洁地渲染不同大小的图形，并和 CSS、DOM、JavaScript 等其他网络标准无缝衔接。本质上，SVG 相对于图像，就好比 HTML 相对于文本。

```html
<svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>
```

绘制流程包括以下几步：

1. 从 svg 跟元素开始：

   a. 应该舍弃来自 HTML 的 doctype 声明，因为基于 SVG 的 DTD 验证导致的问题比它能解决的问题更多

   b. DTD 验证：文档类型定义（DTD）可定义合法的 XML 文档构建模块。它使用一系列合法的元素来定义文档的结构。

   c. SVG 2 之前，version 属性和 baseProfile 属性用来供其他类型的验证识别 SVG 的版本。SVG 2 不推荐使用 version 和 baseProfile 这两个属性

   d. 作为 XML 的一种方言，SVG 必须正确的绑定命名空间（在 xmlns 属性中绑定）

> 命名空间：如果 XHTML 和 SVG 都有一个 title 标签，专业使用者如何识别呢？答案是 XML 内容通过给明确的标签显示“命名空间声明”来告诉使用者哪个方言标签名称属于哪个。

2. 绘制一个完全覆盖图像区域的矩形 <rect/>，把背景颜色设为红色一个半径 80px 的绿色圆圈<circle/>绘制在红色矩形的正中央（向右偏移 150px，向下偏移 100px）
3. 绘制文字“SVG”。文字被填充为白色，通过设置居中的锚点把文字定位到期望的位置：在这种情况下，中心点应该对应于绿色圆圈的中点。还可以精细调整字体大小和垂直位置，确保最后的样式是美观的

### 在项目中的使用

利用 ant 的 Icon 组件封装一个可复用的自定义图标。可以通过 component 属性传入一个组件来渲染最终的图标。

```javascript
import Icon from '@ant-design/icons';
import * as IconSvgs from './icon';

export default function SelfIcon(props) {
  const { iconname } = props;
  return <Icon component={() => IconSvgs[iconname]} {...props} />;
}
```

```javascript
export const iconname = <svg>...</svg>;
```