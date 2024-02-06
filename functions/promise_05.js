function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("ocorreu um erro");
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao("value", 0.1)
  .then((v) => `valor: ${v}`)
  .then(
    (v) => consol.log(v),
    (err) => console.log(`erro esperado.:`, err)
  )
  .then(() => console.log("quase fim"))
  .catch((err) => console.log(`err=> `, err))
  .then(() => console.log("fim"));
