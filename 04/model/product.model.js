const products = require("./../data/products.json");
const fs = require("fs");

const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
};

const findById = (id) => {
  const targetProduct = products.find((pr) => pr.id == id);
  return new Promise((resolve, reject) => {
    resolve(targetProduct);
  });
};

const create = (product) => {
  return new Promise((resolve, reject) => {
    products.push(product);
    fs.writeFile(
      `${process.cwd()}/data/products.json`,
      JSON.stringify(products),
      (err) => {
        if (err) reject(err);
        else
          resolve({ statusCode: 201, message: "Product created successfully" });
      },
    );
  });
};

const ProductModel = {
  findAll,
  findById,
  create,
};
module.exports = ProductModel;
