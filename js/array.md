## 1.构造函数

Array 是JavaScript的原生对象，同时也是一个构造函数，可以用它生成新的数组。

```js
var arr = new Array(2);
arr.length // 2
arr // [empty × 2]
```
上面代码中，Array构造函数的参数2，表示生成两个成员的数组，每个位置都是空值。

如果没有new，运行结果也是一样的。
```js
var arr = new Array(2);
// 等同于
var arr = Array(2);
```
Array构造函数有一个很大的缺陷，就是不同的参数，会导致它的行为不一致。
```js
// 无参数是，返回一个空数组
new Array() // []

// 单个正整数参与，表示返回的新数组的长度
new Array(1) // [ empty ]
new Array(2) // [ empty ✖️ 2 ]

// 非正整数的数值作为参数，会报错
new Array(3.2) // RangeError: Invalid array length
new Array(-3) // RangeError: Invalid array length

// 单个非数值（比如字符串、布尔值、对象等）作为参数
// 则该参数是返回的新数组的成员
new Array('abc') // ['abc']
new Array([1]) // [Array[1]]

// 多参数时，所有参数都是返回的新数组的成员
new Array(1, 2) // [1, 2]
new Array('a', 'b', 'c') // ["a", "b", "c"]
```
可以看到，Array作为构造函数，行为很不一致。因此，不建议使用它生产新数组，直接使用数组字面量是更好的做法。
```js
// bad
var arr = new Array(1, 2);

// good
var arr = [1, 2];
```
注意，如果参数是一个正整数，返回数组的成员都是空位。虽然读取的时候返回undefined，但实际上该位置没有任何值。虽然可以取到length属性，但是取不到键名。
```js
var a = new Array(3);
var b = [undefined, undefined, undefined];

a.length // 3
b.length // 3

a[0] // undefined
b[0] // undefined

0 in a // false
0 in b // true
```
上面代码中，a是一个长度为3的空数组，b是一个三个成员都是undefined的数组。读取键值得时候，a和b都是返回undefined，但是a的键位是空的，b的键位 是有值的。

## 2. 静态方法
### 2.1 Array.isArray()

Array.isArray方法返回一个布尔值，表示参数是否为数组。它可以弥补typeof运算符的不足。
```js
var arr = [1, 2, 3];
typeof arr // "object"
Array.isArray(arr) // true
```
上面代码中，typeof运算符只能显示数组的类型是Object，而Array.isArray方法可以识别数组。

## 3. 实例方法
### 3.1 valueOf(), toString()
valueOf方法是一个所有对象都拥有的方法，表示该对象求值。不同对象的valueOf方法不尽一致，数组的valueOf方法返回数组本身。
```js
var arr = [1, 2, 3]
arr.valueOf() // [1, 2, 3]
```
toString方法也是对象的通用方法，数组的toString方法返回数组的字符串形式。
```js
var arr = [1, 2, 3];
arr.toString() // "1, 2, 3"

var arr = [1, 2, 3, [3, 4, 5]];
arr.toString() // "1,2,3,4,5"
```
### 3.2 push(), pop()
push防范用于在数组的末端添加一个或多个元素，并返回新元素后的数组长度。注意，该方法会改变原数组。
```js
var arr = [];

arr.push(1) // 1
arr.push('a') // 2
arr.push(true, {}) // 4
arr // [1, "a", ture, {}]
```
上面代码使用push方法，往数组中添加了四个成员。

pop方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组。

```js
var arr = ['a', 'b', 'c'];

arr.pop() // "c"
arr // ["a", "b"]
```
空数组使用pop方法，不会报错，而是返回undefined。
```js
[].pop() // undefined
```
push和pop结合使用，就构成了“后进先出”的栈结构（stack）。
```js
var arr = [];
arr.push(1, 2);
arr.push(3);
arr.pop();
arr // [1, 2]
```
上面代码中，3是后进入数组的，但是最早离开数组。

### 3.3 shift(), unshift()

shift()方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。
```js
var a = ['a', 'b', 'c'];

a.shift() // "a"
a // ["b", "c"]
```
上面代码中，使用shift()方法以后，原数组就变了。

shift()方法可以遍历并清空一个数组。
```js
var list = [1, 2, 3, 4];
var item;

while (item = list.shift()) {
    console.log(item);
}

list // []
```
上面代码通过list.shift()方法每次取出一个元素，从而遍历数组。它的前提是数组元素不能是0或任何布尔值等于false的元素，因此这样的遍历不是很可靠。

push() 和 shift() 结合使用，就构成了“先进后出”的队列结构（queue）。

unshift() 方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。
```js
var a = ['a', 'b', 'c'];

a.unshift('x'); // 4
a // ["x", "a", "b", "c"]
```
unshift() 方法可以接受多个参数，这些参数都会添加到目标数组头部。
```js
var arr = ['c', 'd'];

arr.unshift('a', 'b') // 4
arr // ["a", "b", "c", "d"]
```
### 3.4 join()
join() 方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。乳沟不提供参数，默认用逗号分隔。

```js
var a = [1, 2, 3, 4];

a.join(' ') // "1 2 3 4"
a.join(' | ') // "1 | 2 | 3 | 4"
a.join() // "1,2,3,4"
```
如果数组成员是undefined 或 null 或 空位，会被转成空字符。
```js
[undefined, null].join('#') // "#"

['a', , 'b'].join('-') // "a--b"
```
通过 call 方法，这个方法也可以用于字符串或类似数组的对象。
```js
Array.prototype.join.call('hello', '-') // "h-e-l-l-o"

var obj = {0: 'a', 1: 'b', length: 2};
Array.prototype.join.call(obj, '-') // "a-b"
```
### 3.5 concat()
concat 方法用于多个数组的合并。他将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变。
```js
['hello'].concat(['world'])
// ["hello", "world"]

['hello'].concat(['world'], ['!'])
// ["hello", "world", "!"]

[].concat({a: 1}, {b: 2})
// [{a: 1}, {b: 2}]

[2].concat({a: 1})
// [2, {a: 1}]
```
除了数组作为参数，concat 也接受其他类型的值作为参数，添加到目标数组尾部。
```js
[1, 2, 3].concat(4, 5, 6)
// [1, 2, 3, 4, 5, 6]
```
如果数组成员包括对象，concat 方法返回当前数组的一个浅拷贝。所谓“浅拷贝”，指的是新数组拷贝的是对象的引用。
```js
var obj  = {a: 1};
var oldArray = [obj];

var newArray = oldArray.concat();

obj.a = 2;
newArray[0].a // 2
```
上面代码中，原数组包含一个对象，concat 方法生成的新数组包含这个对象的引用。所以，改变原对象以后，新数组跟着改变。

### 3.6 reverse()
reverse 方法用于颠倒排列数组元素，返回改变后的数组。注意，该方法将改变原数组。
```js
var a = ['a', 'b', 'c'];

a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]
```

### 3.7 slice()
slice 方法用于提取目标数组的一部分，返回一个新数组，原数组不变。
```js
arr.slice(start, end);
```
它的第一个参数为起始位置（从0开始），第二个参数为终止位置（但该位置的元素本身不包括在内）。如果省略第二个参数，则一直返回到原数组的最后一个成员。
```js
var a = ['a', 'b', 'c'];

a.slice(0) // ["a", "b", "x"]
a.slice(1) // ["b", "c"]
a.slice(1, 2) // ["b"]
a.slice(2, 6) // ["c"]
a.slice() // ["a", "b", "c"]
```
上面代码中，最后一个例子 slice 没有参数，实际上等于返回一个原数组的浅拷贝。

如果 slice 方法的参数是负数，则表示倒数计算的位置。
```js
var a = ['a', 'b', 'c'];
a.slice(-2) // ["b", "x"]
a.slice(-2, -1) // ["b"]
```
上面代码中，-2 表示倒数计算的第二个位置，-1 表示倒数计算的第一位置。

如果第一个参数大于等于数组长度，或者第二个参数小雨第一个参数，则返回空数组。
```js
var a = ['a', 'b', 'c'];
a.slice(4) // []
a.slice(2, 1) // []
```
slice 方法的一个重要应用，是将类似数组的对象转为真正的数组。
```js
Array.prototype.slice.call({0: 'a', 1: 'b', length: 2})
// ['a', 'b']

Array.prototype.slice.call(document.querySelectorAll('div'));
Array.prototype.slice.call(arguments);
```
上面代码的参数都不是数组，但是通过call方法，在他们上面调用 slice 方法，就可以把它们转为真正的数组。

### 3.8 splice()
splice 方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。
```js
arr.splice(start, count, addElement1, addElement2, ...);
```
splice 的第一个参数是删除的其实位置（从0开始），第二个参数是被删除的元素个数。如果后面还有更多参数，则表示这些就是要插入数组的新元素。
```js
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2) // ["e", "f"]
a // ["a", "b", "c", "d"]
```
上面代码从原数组4号位置，删除了两个数组成员。

```js
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2, 1, 2) // ["e", "f"]
a // ["a", "b", "c", "d", 1, 2]
```
上面代码除了删除成员，还插入两个新成员。

起始位置如果是负数，就表示从倒数位置开始删除。
```js
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(-4, 2) // ["c", "d"]
```
上面代码表示，从倒数第四个位置c开始删除两个成员。

如果只是单纯地插入元素， splice 方法的第二个参数可以设为 0。
```js
var a = [1, 1, 1];

a.splice(1, 0, 2) // []
a // [1, 2, 1, 1]
```
如果只提供第一个参数，等同于将原数组在指定位置拆分成连个数组。
```js
var a = [1, 2, 3, 4];

a.splice(2) // [3, 4]
a // [1, 2]
```

### 3.9 sprt()
sort 方法对于数组成员进行排序，默认是按照字典顺讯排序。排序后，原数组将被改变。
```js
['d', 'c', 'b', 'a'].sort()
// ["a", "b", "c", "d"]

[4, 3, 2, 1].sort()
// [1, 2, 3, 4]

[11, 102].sort()
// [101, 11]

[10111, 1101, 111].sort()
// [10111, 1101, 111]
```
上面代码的最后两个例子，需要特殊注意。sort 方法不是按照大小排序，二十按照字典顺序。也就是说，数组会被先转成字符串，在按照字典顺序进行比较，所以101排序11的前面。

如果想让sort方法按照自定义方式排序，可以传入一个函数作为参数。
```js
[10111, 1101, 111].sort(function(a, b) {
    return a - b;
})
// [111, 1101, 10111]
```
上面代码中， sort 的参数函数本身就接受两个参数，表示进行比较的两个数组成员。如果该函数的返回值大于0，表示第一个成员排在第二个成员后面；其他情况下，都是第一个元素排在第二个元素前面。

```js
[
    {name: "张三", age: 30},
    {name: "李四", age: 24},
    {name: "王五", age: 28},
].sort(function(o1, o2){
    return o1.age - o2.age;
})
// [
//   { name: "李四", age: 24 },
//   { name: "王五", age: 28  },
//   { name: "张三", age: 30 }
// ]
```
### 3.10 map()
map 方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。
```js
var numbers = [1, 2, 3];

numbers.map(function(a) {
    return n + 1;
})
// [2, 3, 4]

numbers
// [1, 2, 3]
```
上面代码中，number 数组的所有成员依次执行采纳数函数，运行结果组成一个新数组返回，原数组没有变化。

map 方法接受一个函数作为参数。 该函数调用时，map方法向它传入三个参数；当前成员、当前位置和数组本身。

```js
[1, 2, 3].map(function(elem, index, arr) {
    return elem * index;
});
// [0, 2, 6]
```
上面代码中，map方法的回调函数有三个参数，elem为当前成员的值，index为当前成员的位置，arr为原数组（[1, 2, 3]）。

map 方法还可以接受第二个参数，用来绑定回调函数内部的this遍历。
```js
var arr = ['a', 'b', 'c'];

[1, 2].map(function(e) {
    return this.[e];
}, arr);
// ["b", "c"]
```
上面代码通过map方法的第一个参数，将回调函数内部的this对象，指向arr数组。

如果数组有空位，map方法的回调函数在这个位置不会执行，会跳过数组的空位。
```js
var f = function(n) { return 'a' };

[1, undefined, 2].map(f) // ["a", "a", "a"]
[1, null, 2].map(f) // ["a", "a", "a"]
[1, , 2].map(f) // ["a", , "a"]
```
上面代码中，map方法不会跳过undefined和null，但是会跳过空位。

### 3.11 forEach()
forEach方法与map方法很相似，也会是对数组的所有成员依次执行参数函数。但是，forEach方法不返回值，只用来操作数据。这就是说，如果数组遍历的目的是为了得到返回值，那么使用map方法，否则使用forEach方法。

forEach的用法与map方法一致，参数是一个函数，该函数同样接受三个参数；当前值，当前位置，整个数组。
```js
function log(element, index, array) {
    console.log('[' + index + '] = ' + element);
}

[2, 5, 9].forEach(log);
// [0] = 2
// [1] = 5
// [2] = 9
```
上面代码中，forEach遍历数组不是为了得到返回值，而是为了在屏幕输出内容，所以不必使用map方法。

forEach方法也可以接受第二个参数，绑定参数函数的this变量。
```js
var out = [];

[1, 2, 3].forEach(function(elem) {
    this.push(elem * elem);
}, out);

out // [1, 4, 9]
```
上面代码中，空数组out是forEach方法的第二个参数，结果，回调函数内部的this关键词就指向out.

注意，forEach方法无法中断执行，总是会将所有成员遍历完。如果希望复合某种条件时，就终端遍历按，要使用for循环。
```js
var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 2) break;
    console.log(arr[i])
}
// 1
```
上面代码中，执行数组的第二个成员时，就会中断执行。forEach方法做不到这一点。

forEach方法也会跳过数组的空位。
```js
var log = function (n) {
    console.log(n + 1);
};

[1, undefined, 2].forEach(log)
// 2
// NaN
// 3

[1, null, 2].forEach(log)
// 2
// 1
// 3

[1, , 2].forEach(log)
// 2
// 3
```
上面代码中，forEach方法不会跳过undefined和null，但会跳过空位。

### 3.12 filter()
filter 方法用于过滤数组成员，满足条件的成员组成一个新数组返回。

它的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。








