let i=Math.floor(Math.random()*(360));
console.log("Posición o ángulo Inicial "+ i);
vAleatorio=Math.floor(Math.random()*((i*360*10)-(i*5*360)+1)+i*5);//the max and min depend on the initial value as if it starts on 90 the max it can get is 900 (10 vueltas) but if it starts at 245 the max will be 2450
console.log("Valor Aleatorio Generado en Grados: "+ vAleatorio);
angulo=vAleatorio%360;
console.log("Ángulo Final: "+angulo);