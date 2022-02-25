## css 选择器优先级

|选择器|格式|优先级权重|
|----|----|----|
| id | #id | 100 |
| 类 | .className | 10 |
| 属性 | a[href="https://www.baidu.com"] | 10 |
| 伪类 | li:last-child | 10 |
| 标签 | div | 1 |
| 伪元素 | li:after | 1 |
| 相邻兄弟 | h1+p | 0 |
| 子 | ul>li | 0 |
| 后代 | ul li | 0 |
| 通配符（所有） | * | 0 |

对于选择器的优先级：
- 标签伪元素选择器：1
- 类，伪类，属性选择器：10 
- id： 100
- 内联样式： 1000

注意事项：
- !important 声明的样式的优先级最高
- 如果优先级相同，则最后出现的样式生效
- 继承得到的样式的优先级最低
- 通用选择器（*）、子选择器（>）和相邻同胞选择器（+）并不再这四个等级中，所以它们的权值都为 0；
- 样式表的来源不同时，优先级顺序为：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式。

## css 中不可继承与可继承属性有哪些

- 无继承性的属性
    1. display：规定元素应该生成的框的类型
    2. 文本属性
        - vertical-align：垂直文本对齐
        - text-decoration：规定添加到文本的装饰
        - text-shadow：文本阴影效果
        - white-space：空白符的处理
        - unicode-bidi：设置文本的方向
    3. 盒子模型的属性： width、height、margin、border、padding
    4. 背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment
    5. 定位属性：float、clear、position、top、right、bottom、left、