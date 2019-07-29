# node的基础和语法

. 弱类型
. Buffer--Node.js特殊数据类型
. 对象字面量
. 函数
. 数组
. 原型特性
. 编码规范

## 弱类型

自动类型转换的特性可以帮助我们节省很多时间和精力。实际上，JavaScript的基本类型只有下面几种：

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Object

其他所有的都是Object；

同样，JavaScript中String、Number和Boolean类型都有相关的方法进行转换，如：
```js
'a' === new String('a') // false
'a' === new String('a').toString() // true
'a' === new String('a') // true
```

*==* 会进行自动类型转换，而 *===* 则不会。

## Buffer-- Nodejs 特殊数据类型

Buffer是Nodejs中4种基本类型（Boolean、String、Number和RegExp）之外添加的一种类型。需要注意的是，Buffer做数据存储非常有效。实际上，Nodejs推荐在任何可以使用Buffer的情况下去使用它，如从文件系统中读取内容或者接受网站内容等。

## 对象字面量

对象字面量相比较而言是很简洁易读的

## 