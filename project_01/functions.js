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

function filterFilesByExtension(extension) {
  return function (arrFiles) {
    return new Promise(function (resolve, reject) {
      try {
        const newArr = arrFiles.filter((file) => file.endsWith(extension));
        resolve(newArr);
      } catch (error) {
        reject(error);
      }
    });
  };
}

function readFile(path) {
  return new Promise(function (resolve, reject) {
    try {
      const content = fs.readFileSync(path).toString();
      resolve(content);
    } catch (error) {
      reject(error);
    }
  });
}

function readFiles(arrPaths) {
  return Promise.all(arrPaths.map((filePath) => readFile(filePath)));
}

function removeEmptyItems(arrRows) {
  return arrRows.filter((row) => row.trim());
}

function removeIfIncluded(patternText) {
  return function (arr) {
    return arr.filter((row) => !row.includes(patternText));
  };
}

function removeIfSomeContainNumber(arr, patternText) {
  return arr.filter((item) => isNaN(item));
}

function removeSymbols(arrSymbols) {
  return function (arr) {
    return arr.map((subItem) => {
      let newText = subItem;
      arrSymbols.forEach((symbol) => {
        newText = newText.replaceAll(symbol, "");
      });
      return newText;
    });
  };
}
module.exports = {
  readDirectory,
  filterFilesByExtension,
  readFiles,
  removeEmptyItems,
  removeIfIncluded,
  removeIfSomeContainNumber,
  removeSymbols,
};
