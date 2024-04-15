const fs = require('fs');
const os = require('os');
const util = require('util');
const { log } = console;

let err = err => {
    if (err) {
        log(err);
    } else {
        log('run ok');
    }
}

// fs.readFile('./input.txt', (err, data) =>  {
//     if (err) {
//         return log(err);
//     }

//     log('异步读取：', data.toString())
// });

fs.writeFile('./tmp.md', `\n# node fs write file ${~~(Math.random() * 100)}`, {'flag': 'a'}, err)

// 复制文件
// fs.copyFile('./tmp.md', './tmp1.md', err);

// 删除文件
// fs.unlink('./tmp1.md', err)



// let data = fs.readFileSync('input.txt');
// log("同步读取：", data.toString())

// log('程序执行完毕');

// log(os.hostname(), os.type(), os.platform(), os.arch(), os.uptime());

// log(util.inspect(os.cpus()));

