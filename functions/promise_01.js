let a = 1;
console.log(a);

const p = new Promise(function (resolve) {
  resolve({ key: "value" });
});
p.then((res) => {
  console.log(res);
});

const arrPromise = new Promise(function (resolve) {
  resolve(["teste 1", "teste 2"]);
});
console.log("========================");

arrPromise
  .then((res) => {
    console.log("elements: ", res);
    return res[0];
  })
  .then((word1) => {
    console.log("word1:", word1);
    return word1[0];
  })
  .then((letter1) => console.log("letter1: ", letter1));
