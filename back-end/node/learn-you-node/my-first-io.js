const fs = require("fs");
const file = process.argv[2];
const con = fs.readFileSync(file);
console.log(con.toString().split(/\n/).length - 1);
