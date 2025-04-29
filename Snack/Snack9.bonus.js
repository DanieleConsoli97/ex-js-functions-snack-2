function sequenzaOperazioni(operazioni, inteval) {
  operazioni.forEach((operazione, index) => {
    setTimeout(() => {
      console.log(operazione);
    }, inteval * index);
  });
}
sequenzaOperazioni([ "Operazione 1", "Operazione 2", "Operazione 3" ], 2000);