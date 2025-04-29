function stampaOgniSecondo (){
    return (messaggio)=>{
        setInterval(()=>{
          return console.log(messaggio)
        },1000)
    }
}

const ognisec = stampaOgniSecondo()
ognisec("ciao")