const fs = require("fs");

const rs2 = fs.createReadStream("./01_nodejs基础.md");
const ws2 = fs.createWriteStream("./02_nodejs基础.md");
rs2.pipe(ws2);
