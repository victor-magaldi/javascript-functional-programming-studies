function generateNumber(min, max, forbidenNumbers) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const factor = max - min + 1;
    let random = Math.floor(Math.random() * factor) + min;

    while (forbidenNumbers.includes(random)) {
      random = Math.floor(Math.random() * factor) + min;
    }
    resolve(random);
  });
}

async function generateMegaSena(qtdNumbers) {
  const numbers = [];
  try {
    for (let _ of Array(qtdNumbers).fill()) {
      const newValue = await generateNumber(1, 60, numbers);
      numbers.push(newValue);
    }
    return numbers;
  } catch (err) {
    throw new Error("Algum erro aconteceu");
  }
}

generateMegaSena(6).then(console.log).catch(console.log);
