const path = require("path");
const fn = require("./functions");

const pathComplete = path.join(__dirname, "legendas");

fn.readDirectory(pathComplete)
  .then(fn.filterFilesByExtension("srt"))
  .then(fn.readFiles)
  .then((content) => content.join(""))
  .then((allContent) => allContent.split("\n"))
  .then(fn.removeIfSomeContainNumber)
  .then(fn.removeIfIncluded("-->"))
  .then(fn.removeIfSomeContainNumber)
  .then(console.log);
