const creaTimer = (tempo) => {
  return function () {
    setTimeout(() => {
      console.log(` ${tempo} tempo scaduto!`);
    }, tempo);
  };
};

const timer = creaTimer(1200);

timer()
