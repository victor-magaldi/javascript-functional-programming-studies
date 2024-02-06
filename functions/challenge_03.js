const fs = require("fs");
const path = require("path");

const pathComplete = path.join(__dirname, "data.txt");

function myFn() {
  return new Promise(function (resolve) {
    fs.readFile(pathComplete, function (_, data) {
      resolve(data.toString());
    });
  });
}
myFn().then((data) => console.log("promise file", data));
