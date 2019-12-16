# 1. 概述

_window.history_ 属性指向History对象，它表示当前窗口的浏览器历史。 

History对象保存了当前窗口访问过的所有页面网址。下面代码表示当前窗口一共访问过三个网址。

```js
window.history.length // 3
```

由于安全原因，浏览器不允许脚本读取这些地址，但是允许在地址之间导航。

```js
// 后台到前一个网址
history.back()

// 等同于
history.go(-1)
```

浏览器工具栏的“前进”和“后退”按钮，其实就是对History对象进行操作、

# 2. 属性

History对象主要有两个属性。

- _History.length_: 当前窗口访问过的网址数量（包括当前网页）
- _History.state_: History推栈最上层的状态值

```js
// 当前窗口访问过多少个网页
window.history.length // 1

// History 对象的当前状态
// 通常是 undefined， 即为设置
window.history.state // undefined
```

# 3. 方法

## 3.1 History.back()、History.forward()、History.go()

这三个方法用于在历史之中移动。

- _History.back()_: 移动到上一个网址，等同于点击浏览器的回退键。对于第一个访问的网址，该方法无效果。
- _History.forward()_: 移动到下一个网址，等同于点击浏览器的前进键。对于最后一个访问的网址，方法法无效果。
- _History.go()_: 接受一个整数作为参数，以当前网址为基准，移动到参数指定的网址，比如 _go(1)_ 相当于 _forward()_, _go(-1)_ 相当于 _back()_。如果参数超过实际存在的网址范围，该方法无效果；如果不指定参数，默认参数为 _0_, 相当于刷新当前页面。

```js
history.back();
history.forward();
history.go(-2);
```

_history.go(0)_ 相当于刷新当前页面。

注意，移动到以前访问过的页面时，页面通常是从浏览器缓存之中加载，而不是重新要求服务器发送新的网页。

## 3.2 History.pushState()

_History.pushState()_ 方法用于在历史中添加一条记录。

```js
window.history.pushState(state, title, url)
```

该方法接受三个参数，依次为：

- _state_: 一个与添加的记录相关联的状态对象，主要用于 _popstate_ 事件。该事件触发时，该对象会传入回调函数。也就是说，浏览器会将这个对象序列化以后保留在本地，重新载入这个页面的时候，可以拿到这个对象。如果不需要这个对象，此处可以填 _null_。

- _title_: 新页面的标题。但是，现在所有浏览器都忽视这个参数，所以这里可以填空字符串。
- _url_: 新的网址，必须与当前页面处在同一个域，浏览器的地址栏将显示这个网址。

假定当前网址是 _example.com/1.html_, 使用 _pushstate()_ 方法在浏览记录（History对象）中添加一个新记录。

```js
var stateObj = {foo: 'bar'};
history.pushState(stateObj, 'page 2', '2.html);
```

添加新记录后，浏览器地址栏立刻显示 _example.com/2.html_ ,当并不会跳转到 _2.html_, 甚至也不会检查 _2.html_ 是否存在，他只是成为浏览历史中的最高记录。这是，在地址栏输入一个新的地址（比如访问 _google.com_）,然后点击了倒退按钮，页面URL将显示 _2.html_; 你在点击一次倒退按钮，URL将显示 _1.html_。

总之， _pushState()_ 方法不会触发页面刷新，只是导致History对象发生变化，地址栏会有翻译。

使用该方法之后，就可以用 _History.state_ 属性读出状态对象。

```js
var stateObj = { foo: 'bar' };
history.pushState(stateObj, 'page 2', '2.html');
history.state // {foo: "bar"}
```

如果 _pushState()_ 的URL参数设置了一个新的锚点值（即hash），并不会触发 _hashchange_ 事件。反过来，如果RUL的锚点值变了，则会在 _History_ 对象创建一条浏览记录。

如果 _pushState()_ 方法设置了一个跨域网址，则会报错。

```js
// 报错
// 当前网址为 http://example.com

hisory.pushState(null, '', 'https://twitter.com/hello');
```

上面代码中， _pushState()_ 想要插入一个跨域的网址，导致报错。这样的设计的目的是，为了防止恶意代码让用户以为他们是在另一个网站上，因为这个方法不会导致页面跳转、

## 3.3 History.repleaceState()

_History.replaceState()_ 方法用来修改History对象的当前记录，其他都与 _pushState()_ 方法一模一样。

假定当前网页是 _example.com/example.html_。

```js
history.pushState({page: 1}, 'title 1', '?page=1');
// URL 显示为 http://example.com/example.html?page=1

history.pushState({page: 2}, 'title 2', '?page=2');
// URL 显示为 http://example.com/example.html?page=2

history.replaceState({page: 3}, 'title 3', '?page=3');
// URL 显示为 http://example.com/example.html?page=3

history.back()
// URL 显示为 http://example.com/example.html?page=1

history.back()
// URL 显示为 http://example.com/example.html

history.go(2)
// URL 显示为 http://example.com/example.html?page=3
```

# 4. popstate 事件

每当一个文档的浏览历史（即 history 对象）出现变化时，就会触发 _popstate_ 事件。

注意，仅仅调用 _pushState()_ 方法或者 _replaceState()_ 方法，并不会触发该事件，只有用户点击浏览器倒退按钮和前进按钮，或者使用JavaScript调用 _History.back_、 _History.forward()_ 、_History.go()_ 方法是才会触发。另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。

使用的时候，可以为 _popstate_ 事件指定回调函数。

```js
window.onpopstate = function(event) {
    console.log('location: ' + document.location);
    console.log('state: ' + JSON.stringify(event.state));
}

window.addEventListener('popstate', function(event){
    console.log('location: ' + document.location);
    console.log('state: ' + JSON.stringify(event.state));
});
```

回调函数的参数是第一个 _event_ 事件对象，它的 _state_ 属性指向 _pushState_ 和 _replaceState_ 方法为当前URL所提供的状态对象 （即这两个方法的第一个参数）。上面代码中的 _event.state_ ,就是通过 _pushState_ 和 _replaceState_ 方法，为当前URL绑定的 _state_ 对象。

这个 _state_ 对象也可以直接通过 _history_ 对象读取。

```js
var currentState = history.state;
```

注意，页面第一次加载的时候，浏览器不会触发 _popstate_ 事件。



# 例子

```js
// sharedStore ===> 封装本地存储库

let wbHistroy = sharedStore.getSessionVariable("wbHistroy");
window.history.pushState("forward", null, "");

if (!wbHistroy && wbHistroy !== 0) {
    sharedStore.setSessionVariable("wbHistroy", window.history.length);
}
if (window.performance) {
    if (performance.navigation.type === 1) {
    sharedStore.setSessionVariable(
        "wbHistroy",
        sharedStore.getSessionVariable("wbHistroy") + 1
    );
    }
}

 //禁止浏览器返回上一页
 $(window).on("popstate", function() {
    let wbHistroy = sharedStore.getSessionVariable("wbHistroy");
    let noGoOut = sharedStore.getSessionVariable("noGoOut");
    if (wbHistroy < window.history.length) {
    if (!noGoOut && noGoOut !== 0) {
        sharedStore.setSessionVariable("noGoOut", window.history.length);
    } else {
        sharedStore.setSessionVariable(
        "noGoOut",
        sharedStore.getSessionVariable("noGoOut") - 1
        );
    }
    noGoOut = sharedStore.getSessionVariable("noGoOut");
    if (wbHistroy === noGoOut) {
        window.history.pushState("forward", null, "");
        window.history.forward(1);
        sharedStore.removeSessionVariable("noGoOut");
    }
    } else if (wbHistroy === window.history.length) {
    window.history.pushState("forward", null, "");
    window.history.forward(1);
    sharedStore.removeSessionVariable("noGoOut");
    }
});
```