const http = require("http");
const { WebSocketServer } = require("ws");

const url = require("url");
const uuid = require("uuid").v4;

const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 12345;

wsServer.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("something");
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
