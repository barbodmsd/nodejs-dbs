// Modules
// Es Module => export default | export | import
// CommonJS => module.exports | require
import x, { myName } from './es.js'

// const { sum, subtract, myName } = require("./common");
// console.log(sum(10,20))
// console.log(subtract(10,5))
// console.log(myName)

// const x = require('./common')
// console.log(x)

console.log(x(10, 20));
console.log(myName)