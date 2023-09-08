let i=Math.floor(Math.random()*(360));
console.log("Posición o ángulo Inicial "+ i);
vAleatorio=Math.floor(Math.random()*((i+360*10)-(i+5*360)+1)+(i+5*360));//the max and min depend on the initial value
console.log("Valor Aleatorio Generado en Grados: "+ vAleatorio);
angulo=vAleatorio%360;
console.log("Ángulo Final: "+angulo);