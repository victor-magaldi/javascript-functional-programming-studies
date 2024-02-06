setTimeout(() => {
  console.log("setTimeout sendo executada");

  setTimeout(function () {
    console.log("setTimeout sendo executada2");
  }, 1000);
}, 1000);

function awaitFor(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("executando====> ");
      resolve("value X");
    }, time);
  });
}

awaitFor(1000)
  .then(() => awaitFor())
  .then((text) => console.log(text));
