// Modules
// Es Module => export | export default | import('file.js')
// CommonJS Module => module.exports | module.exports.x | require('file')

import { sum, myName } from "./es.js";

// const { myName, sum } = require("./common");
// console.log(sum(10, 20));
// console.log(myName);

console.log(sum(10, 20));
console.log(myName);
