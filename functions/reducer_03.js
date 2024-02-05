Array.prototype.myReducerCustom = function (fn, initValue) {
  let acc = initValue;

  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
    } else {
      acc = fn(acc, this[i], i, this);
    }
  }
  return acc;
};
const cart = [
  { name: "Caderno", qtd: 5, price: 15.5, fragile: true },
  { name: "Mochila", qtd: 1, price: 68.0, fragile: true },
  { name: "Lápis", qtd: 1, price: 1.99, fragile: false },
  { name: "Estojo", qtd: 0, price: 1.99, fragile: false },
  { name: "Borracha", qtd: 0, price: 1.99, fragile: false },
];

const fragileItems = cart.filter((item) => item.fragile);
const priceArr = fragileItems.map((item) => item.qtd * item.price);
const average = priceArr.reduce(
  (acumulateValue, currentValue) => {
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

const averageCustom = priceArr.reduce(
  (acumulateValue, currentValue) => {
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

console.log("average", average);
console.log("averageCustom", averageCustom);
