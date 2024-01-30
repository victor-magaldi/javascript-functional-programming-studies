function exec(fn, a, b) {
  console.log(fn(a, b));
}

const somarTerminal = (a, b) => a + b;
const subrtrairTerminal = (a, b) => a - b;

exec(somarTerminal, 36, 38);
exec(subrtrairTerminal, 36, 38);
