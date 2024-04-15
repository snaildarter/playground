// setImmediate(function () {
//   console.log("setImmediate 延迟执行了");
// });

// process.nextTick(function () {
//   console.log("nextTick 延迟执行");
// });

// console.log("正常执行");

let str = "深入浅出 node.js";

let buf = Buffer.from(str, "utf-8");
console.log(buf, buf.toString());
