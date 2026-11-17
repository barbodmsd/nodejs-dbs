const fs = require("fs");

// append

const data = fs.readFileSync("write.txt");

// // fs.appendFile("append.txt", data, (err) => {
// //   if (err) console.log(err);
// // });

fs.appendFileSync("append.txt", data + "Sync.");

// unlink

fs.unlink("append.txt", function (err) {
  if (err) console.log(err);
});

const isExists = fs.existsSync("append.txt");
if (isExists) {
  fs.unlinkSync("append.txt");
}