function creaThrottler(callback, limite) {
  let ultimaEsecuzione = 0;
  return function (...args) {
    const ora = Date.now();
    if (ora - ultimaEsecuzione >= limite) {
      ultimaEsecuzione = ora;
      callback(...args);
    } else {
      console.log("Limite di esecuzione raggiunto");
    }
  };
}
const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)
