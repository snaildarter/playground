## Fetch API

Fetch API 提供了一个JavaScript接口，用于访问和操作HTTP管道的部分，例如请求和响应。他还提供了一个全局*fetch()*方法，该方法提供了一个简单，合理的方式跨网路异步获取资源。

这种功能以前是使用*XMLHttpRequest*实现的。Fetch提供了一个更好的提供法，可以很容易地被其他技术使用，例如 __Service workers__。Fetch还提供了单个逻辑位置来定义其他HTTP相关概念，例如CORS和HTTP的扩展。

请注意，fetch规范与jQuery.ajax()主要有两种方式的不同，牢记：
- 当接收到一个代表错误的HTTP状态码时，从fetch()返回的Promise不会被标记为reject，即使该HTTP响应的状态码是404或500。相反，它会将Promise状态标记为resolve(但是会将resolve的返回值的ok属性设置为false)，仅当网络故障时或请求被阻止时，才会标记为reject。

- 默认情况下，fetch不会从服务器端发送或接收任何cookies，如果站点依赖于用户session，则会导致未经认证的请求（要发送cookes，必须设置credentials选项）。自从2017年8月25日后，默认的credentials政策变更为same-origin Firefox也在61.0b13中改变默认值

## 进行fetch请求

一个基本的fetch秦秋设置起来很简单。看看下面的代码：
```js
fetch('http://example.com/movies.json')
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);
    });
```
这里我们通过网络获取一个JSON文件并将其打印到控制台。最简单的用法是只提供一个参数有用来指明想fetch()到的资源路径，然后一个包含响应结果的promise(一个Response对象)。

当然他只是一个HTTP响应，而不是真的JSON。为了获取JSON的内容，我们需要使用json()方法（在bodymixin中定义，被Request和Response对象实现）。

## 支持的请求参数

fetch()接受第二个可选参数，一个可以控制不同配置的init对象：

参考fetch(),查看所有可选的配置和更多描述。

```js
postData('http://example.com/answer', {answer: 42})
    .then(data => console.log(data))
    .catch(error => console.log(error));

function postData(url, data) {
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cacheed
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Ecample',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc,
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow',
        referrer: 'no-referrer',
    })
    .then(response => response.json()) // parses response to JSON
}
```

## 发送带凭证的请求

为了让浏览器发送包含凭证的请求（即使是跨域源），要将credentials:'include'添加到船体给fetch()方法的init对象。

```js
fetch('https://example.com', {
    credentials: 'include'
})
```

如果你只想在请求URL与调用脚本位于同一源处世发送凭证，请添加credentials:'same-origin'。

```js
fetch('https://example.com', {
    credentials: 'same-origin'
})
```

要改为确保浏览器不在请求包含凭证，请使用credentials:'omit'。

```js
fetch('https://example.com', {
    credentials: 'omit'
})
```

## 上传JSON数据

使用fetch() POST JSON数据

```js
var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
        'Content-type': 'application/json'
    })
})
    .then(res => res.json())
    .catch(err => console.error('Error: ', error))
    .then(res => console.log('Success: ', res));
```

## 上传文件

可以通过HTML <input type="file" /> 元素， FormData() 和 fetch() 上传文件。

```js
var formData = new FormData();
var fileField = document.querySelector("input[type='file']");

formData.append('username', 'abc123');
formData.appent('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
    method: 'PUT',
    body: formData
})
    .then(res =>  res.json())
    .catch(err => console.log('Error:', err))
    .then(res => console.log('Success:', res));
```








