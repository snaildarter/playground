# 1. 概述

Storage 接口用于脚本浏览器保存数据。两个对象部署了这个接口：
_window.sessionStorage_ 和 _window.localStorage_。

_sessionStorage_ 保存的数据用于浏览器的一次会话（session），当会话结束（通常是窗口关闭），数据被清空； _localStorage_ 保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。除了保存期限的长短不同，这两个对象的其他方面都一致。

保存的数据都以“键值对”的形式存在。也就是说，每一项数据都有一个键名和对应的值。所有的数据都是以文本格式保存。

这个接口很像Cookie的强化版，能够使用大的多的存储空间。目前，每个域名的存储上限视浏览器而定。Chrome 是2.5MB， Firefox和Opera是5MB，IE是10MB。其中，Firefox的存储空间有一级域名决定，而其他浏览器没有这个限制。也就是说，Firefox中，_a.example.com_ 和 _b.example.com_ 共享5MB的存储空间。另外，与Cookie一样，它们也受到同域名限制。某个网页存入的数据，只有同域下的网页才能读取，如果跨域操作会报错。

# 2. 属性和方法

Storage 接口只有一个属性。

_Storage.length_: 返回保存的数据项个数。

```js
window.localStorage.setItem('foo', 'a');
window.localStorage.setItem('bar', 'b');
window.localStorage.setItem('baa', 'c');

window.localStorage.length // 3
```

该接口提供5个方法。

## 2.1 Storage.setItem()

_Storage.setItem()_ 方法用于存入数据。它接受两个参数，第一个是键名，第二个是保存的数据。如果键名已经存在，该方法会更新已有的键值。该方法没有返回值。

```js
window.sessionStorage.setItem('key', 'value');
window.localStorage.setItem('key', 'value');
```

注意， _Storage.setItem()_ 两个参数都是字符串。如果不是字符串，会自动转成字符串，在存入浏览器。

```js
window.sessionStorage.setItem(3, {foo: 1});
window.sessionStorage.getItem('3'); // "[object Object]"
```

上面代码中，_setTtem_ 方法的两个参数都不是字符串，但是存入的值都是字符串。

如果存储空间已满，该方法会抛错。

写入不一定要用这个方法，直接赋值也是可以的。

```js
// 下面三种写法等价
window.localStorage.foo = '123';
window.localStorage['foo'] = '123';
window.localStorage('foo', '123');
```

## 2.2 Storage.getItem()

_Storage.getItem()_ 方法用于读取数据。它只有一个参数，就是键名。如果键名不存在，该方法返回 _null_ 。

```js
window.sessionStorage.getItem('key');
window.localStorage.getItem('key);
```

键名应该是一个字符串，否则会被自动转为字符串、

## 2.3  Storage.removeItem()

_Storage.removeItem()_ 方法用于清除某个键名对应的键值。它接受键名作为参数，如果键名不存在，该方法不会做任何事情。

```js
sessionStorage.removeItem('key');
localStorage.removeItem('key);
```

## 2.4 Storage.clear()

_Storage.clear()_ 方法用于清除所有保存的数据。方法的返回值是 _undefined_ 。

```js
window.sessionStorage.clear();
window.localStorage.clear();
```

## 2.5 Storage.key()

_Storage.kye()_ 接受一个整数作为参数（从零开始），返回该位置的键值。

```js
window.sessionStorage.setItem('key', 'value');
window.sessionStorage.key(0); // "key"
```

结合使用 _Storage.length_ 属性和 _Storage.key()_ 方法，可以遍历所有的键。

```js
for (var i = 0; i < window.localStorage.length; i++) {
    console.log(localStorage.key());
}
```

## 3. storage 事件

Storage 接口存储的数据发生变化时，会触发storage事件，可以指定这个事件的监听函数。

```js
window.addEventListener('storage', onStorageChange);
```

监听函数接受一个 _event_ 实例对象作为参数。这个实例对象继承了StorageEvent接口，有个特有的属性，都是只读属性。


- _StorageEvent.key_: 字符串，表示发生变动的键名。如果Storage事件是由 _clear()_ 方法引起，该属性返回 _null_ 。
- _StorageEvent.newValue_: 字符串，表示新的键值。如果storage事件是由 _clear()_ 方法或删除该键值对的，该属性返回null。
- _StorageEvent.oldValue_: 字符串，表示旧的键值。如果该键是新增的，该属性返回 _null_ 。
- _StorageEvent.storageArea_: 对象，返回键值对所在的整个对象。可以从这个属性上面拿到当前域名存储的所有键值对。
- _StorageEvent.url_: 字符串，表示原始触发storage事件的那个网页的网址。

下面是 _StorageEvent.key_ 属性的例子。

```js
function onStorageChange(e) {
    console.log(e.key);
}

window.addEventListener('storage', onStorageChange);
```

注意，该事件有一个特别的地方，就是它不在导致数据变化的当前页面触发，而是在同一个域名的其他窗口触发。也就是说，如果浏览器只打开一个窗口，可能观察不到这个事件。比如同事打开多个窗口，但其中的一个窗口导致存储的数据发生变化时，只有其他窗口才能观察到监听函数的执行，可以通过这种机制，实现多个窗口之间的通信。

storage 一般来说直接使用会比较鸡肋，至少我感觉是，要二次封装一下，直接存js对象或者字符串，取出也是js对象或者字符串。过期时间，这个是比较需要的。

所以要适当封装一下。

```js

class Storage {
    constructor() {
        // 初始化的时候清理过期的值
        this.session = sessionStroage;
    }

    setSessionItem (key, value) {
        if (!key || !value) {
            new Error("key and value are must.");
        }

        this.session.setItem(key, JSON.stringify(value));
    }

    getSessionItem (key){
        if (!key) {
            new Error("key is must.");
        }

        return JSON.parse(this.session.getItem(key));
    }
}
```

