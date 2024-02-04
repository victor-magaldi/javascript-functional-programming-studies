const arrString = "teste".split("");
const string = arrString.join("");

const reducer = arrString.reduce((acumulador, letter) => {
  return acumulador + letter;
}, "");

console.log("arrString", arrString);
console.log("string", string);
console.log("reducer", reducer);
