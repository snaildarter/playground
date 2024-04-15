const http = require("http");

debugger;
http
  .createServer((req, res) => {
    res.writeHead(200, { "Conten-Type": "text/plan" });
    res.end("hello nodejs!");
  })
  .listen(8888, () => {
    console.log("Server start at http://127.0.0.1:8888");
  });
