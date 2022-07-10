//função recebe um valor e exibe o tipo de seus antecessores

exibirTipo(5);

function exibirTipo (numero) {
  for (let i = 0 ; i <= numero ; i++) {
    if (i % 2 === 0)
      console.log (i,'Par');
    else 
      console.log (i,'impar');
  }
}