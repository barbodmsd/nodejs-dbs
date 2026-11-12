const http = require("http");

http
  .createServer((request, response) => {
    // text/plain
    // response.writeHead(200, { "Content-Type": "text/plain" });
    // response.end("Hello my class!");

    // text/html
    // response.writeHead(200, { "content-type": "text/html" });
    // response.write("<h1>Hello my class!</h1>");
    // response.end();

    // application/json
    // response.writeHead(200, { "content-type": "application/json" });
    // response.end(
    //   JSON.stringify({ name: "Barbod Masoudi", job: "Software Developer" }),
    // );

    // xml
    response.writeHead(200, { "content-type": "text/xml" });
    response.end("<xml><key>Hello my class!</key></xml>");
  })
  .listen(3000, () => {
    console.log("server is run on post 3000");
  });
