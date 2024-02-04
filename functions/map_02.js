const cart = [
  { name: "Caderno", qtd: 5, price: 15.5 },
  { name: "Mochila", qtd: 1, price: 68.0 },
  { name: "Lápis", qtd: 1, price: 1.99 },
];

const names = cart.map((item) => item.name);
const qtds = cart.map((item) => item.qtd);
const prices = cart.map((item) => item.price);
const priceTotals = cart.map((item) => item.price * item.qtd);

console.log("names", names);
console.log("qtds", qtds);
console.log("prices", prices);
console.log("priceTotals", priceTotals);
