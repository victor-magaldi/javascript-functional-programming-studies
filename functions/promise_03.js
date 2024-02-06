function generateNumber(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    const factor = max - min + 1;
    const random = Math.floor(Math.random() * factor);
    resolve(random);
  });
}

generateNumber(0, 3).then((r) => console.log(r));
