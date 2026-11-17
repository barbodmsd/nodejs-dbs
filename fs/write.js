const fs = require("fs");

const fullName = "Barbod Masoudi\n";
const data = { name: "Barbod" };

fs.writeFile("write.txt", fullName, { flag: "a" }, (err) => {
  if (err) console.log(err);
});

fs.writeFile("write.json", JSON.stringify(data), (err) => {
  if (err) console.log(err);
});

fs.writeFileSync("write.sync.json", JSON.stringify(data));
