const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara'];

 listaDeChamada.splice(1,0, 'Rodrigo');
 console.log(`Lista de chmada anterior: ${listaDeChamada}`);

// o segundo parametro seveve para remover elementos, porérm, como no exemplo abaixo o parametro aceita 0. Isso indica que nenhum elemento será removido.

listaDeChamada.splice(3,2, 'Pablo');
console.log(`Lista de chmada atualizada: ${listaDeChamada}`);