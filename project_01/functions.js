const fs = require("fs");

function readDirectory(path) {
  return new Promise(function (resolve) {
    let files = fs.readdirSync(path);

    resolve(files);
  });
}

module.exports = {
  readDirectory,
};
