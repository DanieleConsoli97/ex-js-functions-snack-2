function creaContatoreAutomatico(timer) {
  return function () {
    let contatore = 0;
    setInterval(() => {
      contatore++;
      console.log(contatore);
    }, timer);
  };
}

const conta = creaContatoreAutomatico(500);
conta()
