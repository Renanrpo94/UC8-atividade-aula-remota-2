let numeroAlunos = 5;

let listaAlunos = ["Chimbinha","Fulano","Beltrano","Joazinho","Mariazinha","Renan"];

for(let contador = 0; contador < listaAlunos.length; contador++) {
  //console.log(contador)

  if(contador == 0){
    console.log(contador + ": ZERO");  // concatenação
  } 
    else if (contador % 2 == 1){
      console.log(`${contador}: ÍMPAR`) // interpolação - templates strings
  } 
    else {
      console.log(`${contador}: PAR`)
  }  
};