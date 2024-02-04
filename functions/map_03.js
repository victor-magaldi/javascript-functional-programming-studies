Array.prototype.mapCustom = function (fn) {
  const mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this));
  }
  return mapped;
};

const cart = [
  { name: "Caderno", qtd: 5, price: 15.5 },
  { name: "Mochila", qtd: 1, price: 68.0 },
  { name: "Lápis", qtd: 1, price: 1.99 },
];

const names = cart.mapCustom((item) => item.name);
const prices = cart.mapCustom((item) => item.price * item.qtd);

console.log("names", names);
console.log("prices", prices);
