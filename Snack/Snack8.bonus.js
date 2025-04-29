const contoAllaRovescia = (num) => {
  let i = num;
  const idSetInteval = setInterval(() => {
    console.log(i);
    i--;
    if (i < 0) {
      clearInterval(idSetInteval);
        console.log("FINE!");
    }
  }, 1000);
};
contoAllaRovescia(5);