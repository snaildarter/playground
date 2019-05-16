## AJAX简介

AJAX是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

## AJAX 是什么

AJAX = 异步JavaScript和XML。
AJAX是一种用于创建快速动态网页的技术。
通过在后台与服务器进行少量数据交换，AJAX可以是网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
传统网页如果需要更新内容，必需加载整个网页面。
有很多使用AJAX的应用程序案例：新浪微博，Google地图，开心网等等。

## AJAX工作原理

（浏览器） 创建一个XMLHTTPRequest对象，发送数据 -> (服务器) 创建一个返回响应，发数据发给浏览器 -> 浏览器接收返回的数据，更新页面内容

## AJAX是基于现有的Internet标准

1. XMLHttpRequest对象（异步的与服务器交换数据）
2. JavaScript/DOM（信息显示/交互）
3. CSS（给数据定义样式）
4. XML（作为转换数据的格式）

## 创建XMLHttpRequest对象

```js
let xmlhttp;
if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else { // IE5, IE6 浏览器执行代码
    xmlhttp = new AxtiveXObject('Microsoft.XMLHTTP);
}
```

## 向服务器发送请求

```js
xmlhttp.open('GET', 'ajax_info.txt', true);
// open(method, url, async)  // 请求类型，URL，以及是否是异步处理请求
// method: 请求的类型GET或POST
// url: 文件在服务器上的位置
// async: true(异步)或false（同步）
xmlhttp.send();
// 请求发送到服务器
// string: 仅用于POST请求
```

> GET还是POST

与POST项目，GET更简单也更快，并且在大部分情况下都能使用
然后，在一下情况下，请使用POST请求：
1. 无法使用缓存文件（更新服务器上的文件或数据库）
2. 向服务器发送大量数据（POST没有数据量限制）
3. 发送包含未知字符的用户输入时，POST比GET更稳定也更可靠

> 如果需要像HTML表单那样POST数据，请使用setRequestHeader()来添加HTTP头。然后在send()方法中规定您希望发送的数据：

```js
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// setRequestHeader(header, value);
// 向请求添加HTTP头
// header：规定头的名称
// value：规定头部的值
```

## AJAX服务器响应

1. responseText（获得字符串形式的响应数据）
2. responseXML （获得XML形式的响应数据）

## AJAX onreadystatechange事件

当请求被发送到服务器时，我们需要执行一些基于响应的任务。
每当readyState改变时，就会触发onreadystatechange事件。
readyState属性存有XMLHttpRequest的状态信息。

onreadystatechange 存储函数（或函数名），每当readyState属性改变时，就会调用该函数。
readyState 存有XMLHttPRequest的状态。从0到4发生变化。
- 0：请求未初始化
- 1：服务器连接已建立
- 2：请求已接受
- 3：请求处理中
- 4：请求已完成，且响应已就绪

status

- 200： OK
- 404：未找到页面

```js
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        // some code
    }
};
```









