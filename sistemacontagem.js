let numeroAlunos = 5;

for(let contador = 0; contador < numeroAlunos; contador++) {
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