// const fs = require('fs');
const os = require('os');
const util = require('util');
const { log } = console;

// fs.readFile('input.txt', (err, data) => {
//     if (err) {
//         return log(err);
//     }

//     log('异步读取：', data.toString())
// });

// let data = fs.readFileSync('input.txt');
// log("同步读取：", data.toString())

// log('程序执行完毕');

// log(os.hostname(), os.type(), os.platform(), os.arch(), os.uptime());

log(util.inspect(os.cpus()));

