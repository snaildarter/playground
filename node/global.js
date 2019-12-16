// console.log(__filename);
// console.log(__dirname);

// process.on('exit', function(code){
//     console.log('退出码为:', code);
// });

// const util = require('util');
// const arr = [];
// for (let i = 0; i < 150; i += 1) {
//     arr.push(i);
// }
// console.log(util.inspect(arr, true), 2, true);

const os = require('os');
// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");

