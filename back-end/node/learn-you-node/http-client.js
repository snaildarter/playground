const http  = require('http');
const url = process.argv[0];

http.get(url, (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    // 任何 2xx 状态码都表示成功的响应，但是这里只检查 200。
    if (statusCode !== 200) {
        error = new Error('请求失败\n' + `状态码: ${statusCode}`);
    } else if (!/^text\/html/.test(contentType)) {
        error = new Error('无效的 content-type.\n' + `期望的是 text/html 但接收到的是 ${contentType}`);
    }
    if (error) {
        console.error(error.message);
        // 消费响应的数据来释放内存。
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        console.log(rawData);
    });
}).on('error', (err) => {
    console.error(err);
})