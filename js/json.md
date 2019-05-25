## 1.JSON格式

JSON格式（JavaScript Object Notation的缩写）是一种用于数据交换的文本格式，2001年由Douglas Crockford提出，目的是取代繁琐笨重的XML格式。

相比XML格式，JSON格式有两个显著的优点：书写简单，一目了然；符合JavaScript原生语法，可以有解释引擎直接处理，不用另外添加解析代码。所以，JSON迅速被接受，已经成为各大网站交换数据的标准格式，并被写入标准。

每个JSON对象就是一个值，可能是一个数组或对象，也可能是一个原始类型的值。总之，只能是一个值，不能是两个或更多的值。

JSON对值得类型和格式有严格的规定。

1. 符合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。
2. 原始类型的值只有四种：字符串、数组（必须以十进制表示）、布尔值和null（不能使用NaN，Infinity，-Infinity和undefined）。
3. 字符串必须使用双引号表示，不能使用单引号。
4. 对象的键名必须放在双引号里面。
5. 数组或对象最后一个成员的后面，不能加逗号。
以下都是合法的JSON。
```json
["one", "two", "there"]
["one": 1, "two": 2, "three": 3]
["names": ["张三", "李四"]]
[{"name": "张三"}, {"name": "李四"}]
```
以下都是不合法的JSON。
```json
[name: "zhan", 'age': 32]  // 属性名必须使用双引号
[32, 64, 128, 0xFFF] // 不能使用十六进制值
["name": "张三", "age": undefined ] // 不能使用undefined

{
    "name": "张三",
    "birthday": new Date('Fri, 26 Aug 2011 07:13:10 GMT'),
    "getName": function() {
        return this.name;
    }
} // 属性值不能使用函数和日期对象
```
注意，null、空数组和空对象都是合法的JSON值。

## 2. JSON对象
JSON对象是JavaScript的原声对象，用来处理JSON格式数据。它有两个静态方法：JSON.stringify() 和 JSON.parse()。

## 3. JSON.stringify()
JSON.stringify方法用于将一个值转为JSON字符串。该字符串符合JSON格式，并且可以被JSON.parse方法还原。
```js
JSON.stringify('abc') // ""abc""
JSON.stringify(1) // "1"
JSON.stringify(false) // "false"
JSON.stringify([]) // "[]"
JSON.stringify({}) // "{}"

JSON.stringify([1, "false", false])
// '[],"false",false'

JSON.stringify({name: "张三"})
// '["name": "张三"]'
```
上面代码将各种类型的值，转成JSON字符串。

注意，对于原始类型的字符串，转换结果会带双引号。

```js
JSON.stringify('foo') === "foo" // false
JSON.stringify('foo') === "\"foo\"" // true
```
上面代码中，字符串foo，被转成"\"foo\""。这是因为将来还原的时候，内层双引号可以让JavaScript引擎知道，这是一个字符串，而不是其他类型的值。
```js
JSON.stringify(false) // "false"
JSON.stringify('false') // "\"false\""
```
上面代码中，如果不是内层的双引号，将来还原的时候，引擎就无法知道原始值是布尔值还是字符串。

如果对象的属性是undefined、函数或XML对象，该属性会被JSON.stringify过滤。

```js
var obj = {
    a: undefined,
    b: function() {}
};

JSON.stringify(obj) // "{}"
```
上面代码中，对象obj的a属性是undefined，而b属性是一个函数，结果都被JSON.stringify过滤。

如果数组的成员是undefined、函数或XML对象，则这些值被转成null。
```js
var arr = [undefined, function(){} ];
JSON.stringify(arr) // "[null, null]"
```
上面代码中，数组arr的成员是undefined和函数，它们都被转成了null。

正则对象会被转成空对象。
```js
JSON.stringify(/foo/) // "{}"
```

JSON.stringify方法忽略对象的不可遍历的属性。
```js

```

