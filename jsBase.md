# 原生js知识点整理

## 基本类型有哪几种？null是对象吗？基本数据类型和复杂数据类型存储有什么区别？

- 基本数据类型有6种，分别是undefined，null, boolean, string, number, symbol(ES6新增)
- 虽然typeof null返回的值是object，但是null不是对象，而是基本数据类型的一种
- 基本数据存储在栈内存，存储的是指
- 复杂数据存储在堆内存，存储的是地址，当我们把对象赋值给另一个变量的时候，复制的是地址，指向同一块内存空间，当其中一个对象改变是，另个对象也会变化

## typeof是否正确判断类型？instanceof呢？ instanceof的实现原理是什么？

- 首先typeof能够正确的判断基本数据类型，但是处理null，typeof null 输入的是对象
- 但是对于对象来说，typeof 能够正确的判断其类型，typeof判断函数可以输出'function',而除此之外，输出的全是object，这种情况下，我们无法准确的知道随想的类型
- instanceof可以准确的判断复杂数据，但是不能正确判断基本数据类型。
- instanceof是通过原型链判断的， A instanceof B,在A的原型链中层层查找，是否有原型等于B.prototype,如果一直找到A的原型链的顶端（null, 既Object.prototype.\_\_proto__),任然不等于B.prototype, 那么返回false,否则返回true。

> instanceof 的实现代码： 

```js

function instance_of(L, R) { // L 表示左表达式， R表示右表达式
    var O = R.prototype; // 取R的显示原型
    L = L.__proto__;     // 取L的隐式原型
    while (true) {
        if (L === null) { // 已经到顶层
            return false;
        }

        if (O === L) {     // 当O严格等于L时，返回true
            return true;
        }

        L = L.__proto__; // 继续向上议程原型链查找
    }
}

```

## for of, for in和forEach, map的区别

- for...of循环：具有iterator接口，就可以用for...of循环遍历它的成员（属性值）。for...of循环可以使用的范围包括数组，Set和Map结构，某些类似数组的对象，Generator对象，以及字符串。for...of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。对于普通的对象，for...of结构不能直接使用，会报错，必须部署了Iterator接口后才能使用。可以中断循环
- for...in循环：遍历对象自身的和继承的可枚举的属性，不能直接获取属性值。可以中断循环
- forEach: 只能遍历数组，不能中断，没有返回值（或认为返回值是undefined）
- map: 只能遍历数组，不能中断，返回值是修改后的数组

PS: Object.ksys(): 返回给定对象所有可枚举属性的字符串数组

## 如何判断一个变量是不是数组

- 使用Array.isArray 判断，如果犯规true，说明是数组
- 使用instanceof Array 判断，如果返回true，说明是数组
- 使用Object.prototype.toString.call 判断， 如果值是[object Array], 说明是数组
- 通过constructor来判断，如果是数组，那么arr.constructor === Array.(不准确，可以修改constructor的值)

```js
Array.isArray([])
// true

[] instanceof Array
// true

Object.prototype.toString.call([])
// "[object Array]"

[].constructor === Array
// true

var arr = [];
arr.constructor = String;
arr.constructor === Array
// false

```

## 类数组和数组的区别是什么

> 类数组
1. 拥有length属性，其他属性（索引）为非负整数（对象中的索引会被当做字符串来处理）
2. 不具有数组所有具有的方法
类数组是一个普通对象，而真实的数组是Array类型

常见的类数组有：函数的参数argument，DOM对象列表（比如通过document.querySelectorAll 得到的列表），jQuery对象（比如$('div')）


