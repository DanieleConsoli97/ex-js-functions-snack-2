function creaContatoreAutomatico(timer) {
  let contatore = 0;
  return function () {
    setInterval(() => {
      contatore++;
      console.log(contatore);
    }, timer);
  };
}

const conta = creaContatoreAutomatico(500);
conta()
