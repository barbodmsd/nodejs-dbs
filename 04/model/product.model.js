const products = require("./../data/products.json");

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

const ProductModel = {
  findAll,
  findById,
};
module.exports = ProductModel;
