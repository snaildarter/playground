const events = require("events");

const eventEmitter = new events.EventEmitter();

console.log(eventEmitter.getMaxListeners());

eventEmitter.on("rich", function (con1, con2) {
  console.log(con1 && con2 ? "一页暴富" : "just so so");
});

setTimeout(() => {
  eventEmitter.emit("rich", "时间", "空间");
}, 500);

console.log("执行结束");
