const cart = [
  { name: "Caderno", qtd: 5, price: 15.5, fragile: true },
  { name: "Mochila", qtd: 1, price: 68.0, fragile: true },
  { name: "Lápis", qtd: 1, price: 1.99, fragile: false },
  { name: "Estojo", qtd: 0, price: 1.99, fragile: false },
  { name: "Borracha", qtd: 0, price: 1.99, fragile: false },
];

// Apenas fragile= true
// apenas preço  qtd *preço
// gerar média dos valores

const fragileItems = cart.filter((item) => item.fragile);
const priceArr = fragileItems.map((item) => item.qtd * item.price);

console.log(priceArr);
const average = priceArr.reduce(
  (acumulateValue, currentValue) => {
    console.log("acumulateValue", acumulateValue);
    const sumVal = acumulateValue.total + currentValue;
    const sumQtd = acumulateValue.qtd + 1;

    return {
      total: sumVal,
      qtd: sumQtd,
      average: sumVal / sumQtd,
    };
  },
  { total: 0, qtd: 0, average: 0 }
);

console.log(average);
