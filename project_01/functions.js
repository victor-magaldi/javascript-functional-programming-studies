const { rejects } = require("assert");
const fs = require("fs");
const path = require("path");

function readDirectory(pathDir) {
  return new Promise(function (resolve, reject) {
    try {
      const files = fs.readdirSync(pathDir);
      const pathsFiles = files.map((file) => path.join(pathDir, file));
      resolve(pathsFiles);
    } catch (error) {
      reject(error);
    }
  });
}

function filterFilesByExtension(arrFiles, extension) {
  return new Promise(function (resolve, reject) {
    try {
      const newArr = arrFiles.filter((file) => file.endsWith(extension));
      resolve(newArr);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  readDirectory,
  filterFilesByExtension,
};
