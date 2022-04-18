const net = require("net");

const server = net.createServer(function (socket) {
  res.writeHead(200, { "Content-type": "text/plain" });
  // res.setHeader()
  socket.on("data", (data) => {
    socket.write(data.toString());
  });
});

server.listen(1337, function () {
  console.log("server bound");
});
