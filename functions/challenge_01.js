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
const calculo = calcular(1)(2)((a = 0, b = 0) => {
  return a + b;
});
console.log("calculo=>", calculo);
