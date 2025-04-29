function eseguiEferma (avvio, stop) {
  
    return function (messaggio) {
    
      const idsetInterval = setInterval(() => {
        console.log(messaggio);
        
      }, avvio);
   setTimeout(() => { clearInterval(idsetInterval) }, stop);
  };
}

const esegui= eseguiEferma(1000, 5000);
esegui("Ciao sono un messaggio che si ripete ogni secondo")