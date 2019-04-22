# promise 的学习

## Promise的含义

promise 简单来说就是一个容器，里面保存着某个未来才结束的事件（通常是一个异步惭怍）的结果。从语法说，Promise是一个对象，从他可以获取异步操作的消息，Promise提供了统一的API，各种异步操作都可以用同样的方法进行处理。

*Promise* 对象有两个特点：
1. 对象的状态不受外界的影响。Promise对象代表一个异步操作，有三种状态：*pending*（进行中）、*fulfilled* (已成功)、和*rejected*(已失败)。只有异步操作的结构，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语的意思就是承诺，表示其他手段无法改变。

2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。*Promise*对象的状态改变，只有两种可能：从*pending*变为*fulfilled*和从*pending*变为*rejected*。只要这两种情况发生，状态就凝固了，不会在变了，会一直保持这个结果，这是就称为resolved(已定型)。如果改变已经发生了，你再对*Promise*对象添加状态回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

注意，为了行文方便，下面的*resolved*统一只指*fulfilled*状态，不包含*rejected*；

有了*Promise*对象，就可以异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，*Promise*对象提供统一的接口，是的控制异步操作更加容易。

*Promise*也有一些缺点。首先，无法取消*Promise*，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，*Promis*内部抛出的错误，不会反应到外部。第三，当处于*pending*状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

如果某些事件不断地反复发生，一般来说，使用*Stream*模式是比部署*Promise*更好的选择。

## 基本用法

ES6规定，*Promise*对象是一个构造函数，用来生成*Promise*的实例。

下面代码创造了一个*Promise*实例。
```js
const promise = new Promise(function(resolve, reject){
    // code

    if (/* 异步操作成功 */) {
        resolve(value);
    } else {
        reject(error);
    }
});
```
*Promise*构造函数接受一个函数作为参数，该函数的两个参数分别是*resolve*和*reject*。它们是两个函数，由JavaScript引擎提供，不用自己部署。
*resolve*函数的作用是，将*promise*对象的状态从“未完成”变为“成功”（即从pending变为resolved），在一步操作成功时调用，并将异步操作的结果，作为参数传递出去；*reject*函数的作用是，将*promise*对象的状态从“未完成”变为“失败”（即从pending变为rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

*Promise*实例生成以后，可以用*then*方法分别指定*resolved*状态和*rejected*状态的回调函数。

```js
promise.then(function(value){
    // success
}, function(error){
    // failure
});
```
*them*方法可以接受两个回调函数作为参数。第一个回调函数是*promise*对象的状态改变为*resolved*时调用，第二个是回调函数是*promise*对象的状态变为*rejected*时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。

下面是一个*Promise*对象的简单例子。



