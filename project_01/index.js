const path = require("path");
const fn = require("./functions");

const pathComplete = path.join(__dirname, "legendas");

fn.readDirectory(pathComplete).then((files) => console.log(files));
