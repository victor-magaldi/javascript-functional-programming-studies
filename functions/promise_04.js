function generateNumber(min, max, time) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const factor = max - min + 1;
      const random = Math.floor(Math.random() * factor) + min;
      resolve(random);
    }, time);
  });
}

function generateAnyNumbers() {
  return Promise.all([
    generateNumber(0, 3, 2000),
    generateNumber(5, 8, 1000),
    generateNumber(10, 12, 3000),
    generateNumber(5, 12, 3000),
    generateNumber(6, 12, 3000),
  ]);
}
console.time("promise");
generateAnyNumbers()
  .then((numbers) => console.log("numbers ", numbers))
  .then(() => {
    console.timeEnd("promise");
  });
