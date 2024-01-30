const fs = require("fs");
const path = require("path");

const pathComplete = path.join(__dirname, "data.txt");

console.log(pathComplete);

function showContent(_, data) {
  console.log("data=========>", data.toString());
}

fs.readFile(pathComplete, showContent);
fs.readFile(pathComplete, (_, data) => console.log(data.toString()));
