Array.prototype.myFilterCustom = function (fn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const cart = [
  { name: "Caderno", qtd: 5, price: 15.5 },
  { name: "Mochila", qtd: 1, price: 68.0 },
  { name: "Lápis", qtd: 1, price: 1.99 },
  { name: "Estojo", qtd: 0, price: 1.99 },
  { name: "Borracha", qtd: 0, price: 1.99 },
];
const qtdGreaThanZero = cart.myFilterCustom((item) => item.qtd > 0);
const priceGreaThan10 = cart.myFilterCustom((item) => item.price > 10);

console.log("qtdGreaThanZero", qtdGreaThanZero);
console.log("priceGreaThan10", priceGreaThan10);
