### 定义

**媒体类型** （通常称为 Multipurpose Internet Mail Extendsions 或者 `MIME` 类型）是一种标准，用来表示文件、文档或字节流的性质和格式。`MIME` 最新完整列表见[媒体类型](https://www.iana.org/assignments/media-types/media-types.xhtml)。

浏览器通常使用 `MIME` 类型（而不是文件扩展名）来确定如何处理 `URL`，因此 `Web` 服务器在响应头中添加正确的 `MIME` 类型非常重要。如果配置不正确，浏览器有可能会曲解文件内容，网站将无法正常工作，并且下载的文件也会被错误处理。

### 语法

```
type/subtype
```

`MIME` 组成结构非常简单；由类型与子类型两个字符串中间用 `/` 分隔而组成。不允许空格存在。 `type` 表示可以被分为多个子类的独立类别；`subtype` 表示细分后的每个类型。

### 常用的 MIMIE 类型

- application/octet-stream 应用程序的默认值。意思是未知的应用程序
- text/plain 文本文件的默认值。它的意思是文本文件的默认值，但浏览器认为是可以直接展示的
- text/css 指定为 `CSS` 文件。若不指定，则会将其 `MIME` 类型为 `text/plain` 或者 `application/octet-stream` 来发送给浏览器，大都数浏览器不会识别其为 `CSS` 文件，直接忽略掉
- text/html 指定为 `HTML` 内容
- text/javascript 指定为 `JavaScript` 文件
- 图片类型
  - image/gif
  - image/jpeg
  - image/png
  - image/svg+xml
