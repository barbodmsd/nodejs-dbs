const fs = require("fs");

// none-blocking | blocking

// none-blicking
// console.log('first log')
// fs.readFile("products.json", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });
// console.log('second log');

// blocking
console.log("first log");

const data = fs.readFileSync("products.json");
console.log(data);

console.log("second log");
