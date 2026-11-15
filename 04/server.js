const http = require("http");
const products = require("./data/products.json");
const ProductController = require("./controllers/product.controller");
const PORT = 4000;

const singleProductRegex = /\/api\/products\/[0-9]+/;

// create server
http
  .createServer((req, res) => {
    const { url } = req;
    if (url === "/api/products") {
      ProductController.findAll(req, res);
    } else if (singleProductRegex.test(url)) {
      ProductController.findById(req, res);
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          statusCode: 404,
          message: `Invalid route: ${url}`,
        }),
      );
    }
  })
  .listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
  });
