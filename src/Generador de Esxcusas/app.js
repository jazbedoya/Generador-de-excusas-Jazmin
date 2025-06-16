
window.onload = function() {
  //write your code here
  document.getElementById('excuse').innerHTML = generateExcuse();
};

//Excusas en diferentes listas (arrays)
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


//Funcion que elige un numero aleatorio
function randomIndex(array){
  return Math.floor(Math.random() * array.length);
}







// funcion que genera la excusa
function generateExcuse() {
  let excuse =
    who[randomIndex(who)] + '  '+
    action[randomIndex(action)]+ '  '+
    what[randomIndex(what)]+'  '+
    when[randomIndex(when)];
  return excuse;


}
