## src 和 href 的区别

src 和 href 都是用来引用外部的资源，它们的区别如下：
- src： 表示对资源的引用，它指向的内容会内嵌到当前标签所在的位置。src 会将其指向的资源下载并应用到文档内，如请求 js 脚本。当前浏览器解析到该元素时，会暂停其他资源的下载和处理，知道该资源加载、编译、执行完毕，所以一般 js 脚本会放早页面底部。
- herf： 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当前浏览器识别到它指向的文件时，就会并行下载资源，不会停止对当前文档的处理。常用在 a、link、等标签上。

## 对 html 语义化的理解

语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化）。通俗来讲就是用正确的标签做正确的事情。

- 对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于 SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；
- 对于开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。

常见的语义化标签：

```html
<header>头部</header>
<nav>导航</nav>
<section>区块</section>
<main>主要区域</main>
<article>文章，主要内容</article>
<aside>侧边栏</aside>
<footer>底部</footer>
```

## DOCTYPE （文档类型）的作用

DOCTYPE 是 HTML5 中一种标准通用编辑语言的文档类型声明， 它的目的是告诉浏览器（解析器）应该以什么样（html 或 xhtml）的文档类型定义来解析文档，不同的渲染模式会影响浏览器对 css 代码甚至 JavaScript 脚本的解析。他必须声明在 HTML 文档的第一行。

浏览器渲染页面的两种模式（可以通过 document.compatMode 获取）：
- CSS1Compat： 标准模式（Strick mode），默认模式，浏览器使用 W3C 的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准程现页面。
- BackCompat： 怪异模式（混杂模式）（Quick mode），浏览器使用自己的怪异模式解析渲染页面，在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。

## script 标签中 defer 和 async 的区别

如果没有 defer 或 async 属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。

defer 和 async 属性都是去异步加载外部 JS 脚本文件，他们都不会阻塞页面的解析，其区别如下：

- 执行顺序： 多个带 async 属性，不能保证加载的顺序；多个带 defer 属性的标签，按照加载顺序执行；
- 脚本是否并发执行：async 属性，表示后续文档的加载和执行与 js 脚本的加载和执行是并行进行的，及异步执行；defer 属性，加载后续文档的过程和 js 脚本的加载（此时仅加载不执行）是并行进行（异步），js 脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded 事件触发执行之前。

## 常用的 meta 标签有哪些

meat 标签由 name 和 content 属性定义，用来描述网页文档的属性，比如网页的作者，网页描述，关键词等，除了 HTTP 标准固定了一些 name 作为大家使用的共识，开发者还可以自定义 name。

常用的 meta 标签：
```HTML
<!-- 1）charset，用来描述 HTML 文档的编码类型： -->
<meta charset="UTF-8" >

<!-- 2) keywords, 页面关键词 -->
<meta name="keywords" content="关键词">

<!-- 3）description 页面描述 -->
<meta name="decription" content="页面描述">

<!-- 4）refresh 页面重定向和刷新 -->
<meta http-equiv="refresh" content="0;url=">

<!-- 5) 适配移动端，可以控制视口的大小和比例 -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<!-- 其中 content 参数有以下几种
- width viewport: 宽度（数值/device-width）
- height viewport: 高度（数值/device-height）
- initial-scale: 初始缩放比例
- maximum-scale: 最大缩放比例
- minimum-scale： 最小缩放比例
- user-scalable：是否允许用户缩放（yes/no） -->

<!-- 6) 搜索引擎索引方式 -->
<meta name="robots" content="index,follow">
<!-- 其中 content 参数有以下几种：
- all：文件将被检索，且页面上的链接可以被查询；
- node： 文件不被检索，且页面上的链接不可以被查询；
- index： 文件将被检索；
- follow：页面的的链接可以被查询；
- noindex：文件将不被检索；
- nofollow： 页面上的链接不可以被查询。 -->
```

## HTML5 有哪些更新

1. 语义化标签
header：定义文档的头部
nav：定义导航链接部分
footer：定义文档的底部
article： 定义文章内容
section：定义文档的节（section 区段）
aside： 定义侧边 （所处内容之外的内容）

2. 媒体标签
- audio：音频
    ```HTML
    <audio src='' controls autoplay loop="true"></audio>
    ```
    属性：
    - constrols 控制面板
    - autoplay 自动播放
    - loop="true" 循环播放

- video 视频
    ```HTML
    <video src="" poster="imgs/eg.jpg" controls> </video>
    ```
    属性：
    - poster：指定视频还没有完全下载完毕，或者用户还没有点击播放前显示的封面。默认显示当前视频文件的第一针画面，当然通过 poster 也可以自己指定。
    - controls 控制面板
    - width
    - height

- source 标签因为浏览器对视频格式支持程度不一样，为了能够兼容不同的浏览器，可以通过 source 来指定视频源。
    ```HTML
    <video>
        <source src="eg.flv" type="video/flv"></source>
        <source src="eg.mp4" type="video/mp4"></source>
    </video>
    ```

3. 表单

- 表单类型
    - email：能够验证当前输入的邮箱地址是否合法
    - url：验证 URL
    - number：只能输入数字，其他输入不了，而且自带上下增大减小箭头，max 属性可以设置为最大值，min 可以设置为最小值，value 为默认值
    - search：输入框后面会提供一个小叉，可以删除输入的内容，更加人性化
    - renge：可以提供给一个范围，其中可以设置 max 和 min 以及 value，其中 value 属性可以设置默认值
    - color：提供一个颜色拾取器
    - time：时分秒
    - date：日期选择年月日
    - datetime：时间和日期
    - datetime-local：日期时间控件
    - week：周控件
    - month：月控件

- 表单属性
    - placeholder：提示信息
    - autofocus：自动获取焦点
    - autocomplete="on/off" 是用这个属性需要有两个前提：
        - 表单必须提交过
        - 必须有name 属性
    - required：要求输入框不能为空，必须有值才能提交
    - pattern="" 里面写入想要的正则模式，例如手机号 pattern="^(+86)?\d{10}$"
    - multiple: 可以选择多个文件或者多个邮箱
    - form：form 表单的 in
- 表单事件
    - oninput 每当 input 里的输入框内容发生变化都会触发次事件
    - oninvalid 当验证不通过时触发此事件

4. 进度条，度量器

    - progress 标签：用来表示任务的进度，max 用来表示任务的进度，value 表示以完成多少
    - meter 属性：用来显示剩余容量或剩余库存
        - high/low: 规定被视作高/低的范围
        - max/min: 规定最大/小值
        - value： 规定当前度量值
        设置规则： min < low < high < max

5. DOM 查询操作

    - document.querySelector()
    - document.querySelectorAll()

    它们选择的对象可以是标签，可以是类（.）,可以是 ID（#）

6. Web 存储

    HTML5 提供了两种在客户端存储数据的新方法：
    - localStorage 没有时间限制的数据存储
    - sessionStorage 针对一个 session 的数据存储

7. 其他

    - 拖放：拖放是一种常见的特性，即抓取对象以后拖到另一个位置。设置元素可拖放
    ```HTML
    <img src="" draggable="true">
    ```
    - 画布（canvas）：canvas 元素使用 JavaScript 在网页上绘制图像。画布是一个矩形区域，可以控制其每一像素。canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图象的方法。
    ```html
    <canvas id="myCancas" width="200" height="100"></canvas>
    ```
    - SVG: SVG 指可伸缩矢量图形，用于定义用于网络的基于矢量的图形，使用 XML 格式定义图形，图象在放大或改变尺寸的情况下其图形质量不会有损失，它是万维网联盟的标准
    - 地理定位：Geolocation（地理定位）用于定位用户的位置。

总结：1. 新增语义化标签：nav、header、footer、aside、section、article 2. 音频视频标签：audio、video 3. 数据存储：localStorage、sessionStorage 4. canvas（画布）、Geolocation（地理定位）、websocket（通信协议） 5. input 标签新增属性：placeholder、autocomplete、autofocus、required 6. history API： go、forward、back、pushstate
移除的元素有：
- 纯表现的元素： basefont、big、center、font、s、strike、tt、u
- 对可用性产生负面影响的元素： frame、frameset、noframes；

## img 的 srcset 属性的作用

响应式页面中经常用到根据屏幕密度设置不同的图片。这时就用到了 img 标签的 srcset 属性。srcset 属性用于设置不同屏幕密度下，img 会自动加载不同的图片。用法如下：
```HTML
<img src="image-128.png" srcset="image-256.png 2x">
```

使用上面的代码，就能实现在屏幕密度为 1x 的情况下加载 image-128.png，屏幕密度为 2x 时加载 image-256.png。

按照上面的实现，不同的屏幕密度都要设置图片地址，目前的屏幕密度有 1x、2x、3x、4x 四种，如果每个图片都设置4 张图片，加载就会很慢，所以就有了新的 srcset 标准。代码如下
```HTML
<img src="image-128.png" 
    srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"
    sizes="(max-width: 360px) 340px, 128px">
```

其中 srcset 指定图片的地址和对应的图片质量。sizes 用来设置图片的尺寸零界点。对于 srcset 中的 w 单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用。浏览器会自动选择一个最小的可用图片。

sizes 语法如下：
sizes="[media query] [length], [media query] [length] ..."

sizes 就是指默认显示 128px，如果视区宽度大于 360px，则显示 340px。

## 行内元素有哪些？块级元素有哪些？空（void）元素有哪些？

行内元素： a、b、span、img、input、select、strong
块级元素：div、ul、ol、li、dl、dt、dd、h1-6、p
常见的空元素：br、hr、img、input、link、meat
不常见的空元素：area、base、col、colgroup、command、embed、keygen、param、source、track、wbr

## web worker

在 html 页面中，如果在执行脚本时，页面的状态是不可相应的，直到脚本执行完成后，页面才变成可相应。web worker 是运行在后台的 js，独立于其他脚本，不会影响页面的性能。并且通过 postMessage 将结果回传给主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。

如何创建 web worker：
1. 检测浏览器对于 web worker 的支持性
2. 创建 web worker 文件（js，回传函数等）
3. 创建 web worker 对象

## title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别

- strong 标签有语义，是起到加重语气的效果，而 b 标签是没有的，b 标签只是一个简单的加粗标签。b 标签之间的字段都设为粗体，strong 标签加强字符的语气都是通过粗体来实现的，而搜索引擎更侧重 strong 标签。
- title 属性没有明确意义只表示是个标题，H1 则表示层次明确的标题，对页面信息的抓取有很大的影响
- i 内容展示为斜体，em 表示强调的文本

## iframe 有哪些优点和缺点？

iframe 元素会创建包含外一个文档的内联框架（即行内框架）。
优点：

- 用来加载速度较慢的内容
- 可以使脚本并行下载
- 可以实现跨域通信

缺点：

- iframe 会阻塞主页面的 onload 事件触发执行之前
- 无法被一些搜索引擎识别
- 会产生很多页面，不容易管理
 
## label 的作用是什么？如何使用

label 标签来定义表单控件的关系： 当用户选择 label 标签时，浏览器会自动将焦点转到和 label 标签相关的表单控件上。


```HTML
<!-- 使用方法 1： -->
<label for="mobile">Number:</label>
<input type="text" id="mobile">

<!-- 使用方法 2 -->
<label>Date: <input type="text"></label>
```

## HTML5 drag API

- dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发
- drag：事件主体是被拖放元素，在正在拖放被拖放元素时触发
- dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发
- dragover：事件主体是目标元素，在被拖放在某元素内移动时触发
- dragleave：事件主体是目标元素，在被拖放元素移除目标元素时触发
- drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发
- dragend：事件主体是被拖放元素，在整个拖放操作结束时触发