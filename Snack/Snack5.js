function stampaOgniSecondo (messaggio){
    return ()=>{
        setInterval(()=>{
          return console.log(messaggio)
        },1000)
    }
}

stampaOgniSecondo("ciao")
