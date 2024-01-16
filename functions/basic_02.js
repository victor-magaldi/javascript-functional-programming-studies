// funções como parâmetro
function executeFunction(fn) {
  if (typeof fn === "function") {
    fn();
  }
}
const goodBye = () => {
  console.log("Good Bye");
};
executeFunction(goodBye);
executeFunction(2);

// retornar funções através de outras funções

function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potencia2 = potencia(2);
console.log(potencia2(8)); // 256
console.log(potencia(2)(8)); // 256
