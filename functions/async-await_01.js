function esperarPor(tempo = 1000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, tempo);
  });
}

async function executar() {
  await esperarPor(1000);
  console.log("1...");

  await esperarPor(1000);
  console.log("2...");

  await esperarPor(1000);
  console.log("3...");
}

executar();
