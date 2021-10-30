let numeroAlunos = 6;

let listaAlunos = ["Chimbinha","Fulano","Beltrano","Joazinho","Mariazinha","Renan"];

for(let contador = 0; contador < listaAlunos.length; contador++) {
  

  if(contador == 0){
    console.log(contador + ": ZERO: " + listaAlunos[contador]);
  } 
    else if (contador % 2 == 1){
      console.log(`${contador}: ÍMPAR: ${listaAlunos[contador]}`)
  } 
    else {
      console.log(`${contador}: PAR: ${listaAlunos[contador]}`)    
    } 
  } 

