const contoAllaRovescia = (num) => {
  let i = num;
  const idSetInteval = setInterval(() => {
    console.log(i);
    
    if (i > 0) {
     i--;
    }else{
       clearInterval(idSetInteval);
        console.log("FINE!");
    }
  }, 1000);
};
contoAllaRovescia(5);