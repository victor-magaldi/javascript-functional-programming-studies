const cart = [
  { name: "Caderno", qtd: 5, price: 10.0 },
  { name: "Mochila", qtd: 1, price: 9.99 },
  { name: "Lápis", qtd: 1, price: 5.0 },
];

const prices = cart.map((item) => item.price * item.qtd);

const total = prices.reduce((acumulador, currentValue) => {
  console.log(acumulador, "+", currentValue);
  return acumulador + currentValue;
}, 0);

console.log("arr prices", prices);
console.log("Total", total.toFixed(2));
