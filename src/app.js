
const number = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const palos= ["&spades;","&clubs;","&hearts;","&diams;"];
const colorPalo = ["negro","rojo"];

const generarcolorRandom = () => {
  return indexNumbers = Math.floor(Math.random() *colorPalo.length); 
}
const generarNumeroRandom = () => {
  return indexNumbers = Math.floor(Math.random() * number.length); 
}
const generarPaloRandom = () => {
  return indexSuit = Math.floor(Math.random() * palos.length);
}
window.onload = function() {
  //write your code here
  let posPalo = generarNumeroRandom();
  let posNumero = generarPaloRandom();
  let poscolor = generarcolorRandom()
  console.log(colorPalo[poscolor]);
  const card =document.querySelector(".card");
  const h1 = document.createElement('h1')
  h1.classList.add("h1");
  h1.innerHTML = number[posPalo];
  card.appendChild(h1);
  const palo1 = document.createElement('h1')
  palo1.classList.add("top-suit")
  palo1.classList.add(colorPalo[poscolor]);
  palo1.innerHTML = palos[posNumero];
  card.appendChild(palo1);

  const palo2 = document.createElement('h1')
  palo2.classList.add("bottom-suit")
  palo2.innerHTML = palos[posNumero];
  card.appendChild(palo2);
  palo2.classList.add(colorPalo[poscolor]);



  

};
