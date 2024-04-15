const fs = require("fs");
const file = process.argv[2];
fs.readFile(file, (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString().split(/\n/).length - 1);
});
