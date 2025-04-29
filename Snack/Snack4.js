const creaTimer = () => {
  return function (tempo) {
    setTimeout(() => {
      console.log(` ${tempo} tempo scaduto!`);
    }, tempo);
  };
};

const timer = creaTimer();

timer(1200)
