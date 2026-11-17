const ProductModel = require("../model/product.model");
const products = require("./../data/products.json");

const findAll = async (req, res) => {
  try {
    const products = await ProductModel.findAll();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error.message);
  }
};

const findById = async (req, res) => {
  try {
    const id = req?.url?.split("/")?.at(-1);
    const targetProduct = await ProductModel.findById(id);
    if (!targetProduct) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({ statusCode: 404, message: "Invalid product id" }),
      );
    } else {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(targetProduct));
    }
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    let bodyData = "";
    req.on("data", (chunkData) => {
      bodyData += chunkData.toString();
    });
    req.on("end", async () => {
      const product = { id: products?.length + 1, ...JSON.parse(bodyData) };
      const result = await ProductModel.create(product);
      res.writeHead(201, { "content-type": "application/json" });
      res.end(JSON.stringify(result));
    });
  } catch (error) {
    console.log(error);
  }
};

const ProductController = {
  findAll,
  findById,
  create,
};

module.exports = ProductController;
