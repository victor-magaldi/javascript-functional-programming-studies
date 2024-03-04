const path = require("path");
const fn = require("./functions");

const pathComplete = path.join(__dirname, "legendas");

fn.readDirectory(pathComplete)
  .then((files) => fn.filterFilesByExtension(files, "srt"))
  .then((filesSrt) => fn.readFiles(filesSrt))
  .then((content) => content.join(""))
  .then((allContent) => allContent.split("\n").length)
  .then(console.log);
