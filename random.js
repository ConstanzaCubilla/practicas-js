var text="";
function getRndInteger(min, max) {
  for (let i=1;i<=10;i++){
  text+="<br> Nro de Juego: "+ i+ "<br> valor aleatorio: " +((Math.floor(Math.random() * (max - min + 1) )+min)+ "<br>"+"Nro que cayó en la ruleta: "+ (Math.floor(Math.random() * (max - min + 1) ) + min)%37)+"<br>";}
  return(text);}
