for (let i=1;i<=10;i++){
    console.log("Nro de Juego: "+i);
    console.log("Valor Aleatorio Generado: "+ ((Math.floor(Math.random() * (370 - 185 + 1) )+185)));
    console.log("Nro que cayó en la ruleta:  "+ (Math.floor(Math.random() * (370 - 185 + 1) ) + 185)%37);
    console.long(" ")
}