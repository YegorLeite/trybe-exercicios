const anguloA = 60;
const anguloB = 60;
const anguloC = 60;

let somaDosAngulos = anguloA + anguloB + anguloC;
let todosAngulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(todosAngulosPositivos){
    if (somaDosAngulos === 180) {
      console.log(true);
    } else {
      console.log(false);
    };
  } else {
    console.log('Erro: ângulo inválido');
  }

