const ProductModel = require("../model/product.model");

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

const ProductController = {
  findAll,
  findById,
};

module.exports = ProductController;
