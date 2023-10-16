const display = document.querySelector('#display');
const btns = document.querySelectorAll('button');

const digits = ['0','1','2','3','4','5','6','7','8','9','.'];
const operations = ['+','-','*','/'];

let num1 = '';
let num2 = '';
let oper = '';

for (let i=0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        if(digits.includes(btns[i].value)){
            num1 += btns[i].value
            display.value = num1
        }
        if(num1 = 0){

        }
    })
}

const nums = ['0','1','2','3','4','5','6','7','8','9','.'];
const btns = document.querySelector('button');

for(let i; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        SignV(btns[i].value)
    })
}















/* const liczby = document.querySelector(".liczba");
const znaki = document.querySelector(".znak");
const czyszczenie = document.querySelector(".wyczysc");
const poprzedniWynik = document.querySelector(".poprzednie");
const aktualnyWynik = document.querySelector(".aktualne");

let aktualneDzial = "";
let poprzednieDzial = "";
let operacja = undefined;

const oblicz = () => {
  let dzialanie;
  if (!poprzednieDzial || !aktualneDzial) {
    return;
  }
};

const poprzednie = parseFloat(poprzednieDzial);
const aktualne = parseFloat(aktualneDzial);

if (isNaN(poprzednie) || isNaN(aktualne)) {
  return;
}

const wyczyscWynik = () => {
    aktualneDzial = ''
    poprzednieDzial = ''
    operacja = undefined
}

switch (operacja) {
  case "+":
    dzialanie = poprzednie + aktualne;
    break;
  case "-":
    dzialanie = poprzednie - aktualne;
    break;
  case "*":
    dzialanie = poprzednie * aktualne;
    break;
  case "/":
    if ((aktualne = 0)) {
        wyczyscWynik()
        return;
    }
    dzialanie = poprzednie / aktualne;
        break;
    case "√":
        break;
    case "%":
        dzialanie = aktualne / poprzednie * 100;
        break;
    case "log":
        break;
    case "^":
        break;
    default:
        return;

        
}

aktualneDzial = dzialanie
operacja = undefined
poprzednieDzial = ''

const wyborZnaku */
