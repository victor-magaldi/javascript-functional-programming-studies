const fs = require("fs");
const path = require("path");

function readDirectory(pathDir) {
  return new Promise(function (resolve) {
    let files = fs.readdirSync(pathDir);
    const pathsFiles = files.map((file) => path.join(pathDir, file));
    resolve(pathsFiles);
  });
}

module.exports = {
  readDirectory,
};
