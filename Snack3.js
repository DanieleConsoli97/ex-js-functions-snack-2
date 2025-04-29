const somma = (a,b)=> a+b;
const sottrai =(a,b)=>a-b;
const moltiplicazione = (a,b) => a*b;
const SommaCuboNumeri = (a,b)=>Math.pow(a, 3) + Math.pow(b, 3)

eseguiOperazione = (a,b,operazione) => {
   return operazione(a,b)
}


console.log(eseguiOperazione(2,3,somma))
console.log(eseguiOperazione(2,3,SommaCuboNumeri))