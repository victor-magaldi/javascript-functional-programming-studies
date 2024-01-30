function exec(fn, a, b) {
  return fn(a, b);
}

const somarTerminal = (a, b) => a + b;
const subrtrairTerminal = (a, b) => a - b;

const soma = exec(somarTerminal, 36, 38);
const subtracao = exec(subrtrairTerminal, 36, 38);
console.log("soma", soma, "subtracao", subtracao);
