let opcion1 = document.getElementById("opcion1");
let opcion2 = document.getElementById("opcion2");
let resultado1 = document.getElementById("resultado1");

function clear() {
  resultado1.innerHTML = "";
}

function mostrar(){
  clear()
  let check1 = opcion1.checked;
  let check2 = opcion2.checked;

    if(check1 == true &&  check2 == false){
        resultado1.innerHTML += "Opción 1 estan activadas";
      }else if(check1 == false &&  check2 == true){
        resultado1.innerHTML += "Opción 2 estan activadas";
      }else if (check1 == false &&  check2 == false ){
        resultado1.innerHTML += "Ambas opciónes estan desactivadas";
      }
    }


/////////////////////////////////////////////////////
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");

function mayor(){

  clear()
  let numint1 = parseInt(number1.value);
  let numint2 = parseInt(number2.value);
  
  if(numint1 > numint2){
    resultado1.innerHTML += "El valor A es mayor que B";
    alert("El valor A es mayor que B")
  }else if(numint1 < numint2){
    resultado1.innerHTML += "El valor B es mayor que A";
    alert("El valor B es mayor que A")
  }else if(numint1 == numint2){
    resultado1.innerHTML += "Los valores A y B son iguales";
    alert("Los valores A y B son iguales")
  }else{
    resultado1.innerHTML += "Complete los campos";
    alert("Complete los campos")
  }
} 

////////////////////////////////////////
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

function suma(){
  clear()
  let a = parseInt(num1.value);
  let b = parseInt(num2.value);
  
  resultado1.innerHTML += (a + b);
}

