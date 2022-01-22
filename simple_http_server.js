const httpClient = require("http");
const PORT = 4000;
httpClient
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("Hello world!");
      res.end();
    }
  })
  .listen(PORT);
console.log("Http server listening on port " + PORT);
