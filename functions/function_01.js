//function declaration
function bomDia() {
  console.log("Bom dia");
}
bomDia();

//function expression - Armazena a função em uma variável , este conceito é muito importante para o Pardgma funcional
const boaTarde = function () {
  console.log("Boa tarde");
};
boaTarde(); // retorno undefined

function somar(a, b) {
  return a + b;
}

const soma = somar(1, 2);
console.log("soma", soma);

const soma2 = somar(1, 2, 3, 4, 5); // vai ignorar os outros parâmetros adicionais
console.log("soma2", soma);

const soma3 = somar(1); // vai retornar nan, pois o segundo parâmetro é undefined
console.log("soma3", soma3);

// para contornar este problema é necessário passar valores default na criação da função

function somarNew(a, b = 0) {
  return a + b;
}
const soma4 = somarNew(1);
console.log("soma4", soma4);
