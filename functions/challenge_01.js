// basic_01 and basic_02

// desafio uma função que seja capaz de somar da seguinte forma somar(1)(2)(3)
function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const somatorio = somar(1)(2)(5);
console.log("somatorio=>", somatorio);

// um função que ao final vai receber a operação calcular(3)(7)(fn)
function calcular(a) {
  return function (b) {
    return function (fn) {
      return fn(a, b);
    };
  };
}

const fnSomar = (a = 0, b = 0) => {
  return a + b;
};
const fnSubtrair = (a = 0, b = 0) => {
  return a - b;
};
const fnDividir = (a = 0, b = 1) => {
  return a / b;
};
const fnMultiplicar = (a = 0, b = 0) => {
  return a * b;
};
const calculoSomar = calcular(1)(2)(fnSomar);
const calculosubtrair = calcular(10)(2)(fnSubtrair);
const calculoDividir = calcular(10)(2)(fnDividir);
const calculoMultiplicar = calcular(10)(2)(fnMultiplicar);

console.log("calculoSomar =>", calculoSomar);
console.log("calculosubtrair =>", calculosubtrair);
console.log("calculoDividir =>", calculoDividir);
console.log("calculoMultiplicar =>", calculoMultiplicar);
