// arrow function
const hello = () => "hello";
console.log(hello());

const helloWithName = (name = "") => `hello ${name}`;
console.log(helloWithName("Victor"));

const add = (...numbersArr) => {
  let total = 0;
  for (let n of numbersArr) {
    total += n;
  }
  return total;
};
console.log(add(1, 2, 3));
