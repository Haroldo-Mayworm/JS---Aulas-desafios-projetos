// Grupo de valores dentro de uma unica variavel
var jogadores = ['Ronaldo', 'Messi', 'Neymar'];
// console.log(jogadores[0]);


// Metodos e propriedades

// console.log(jogadores.pop()); // remove o ultimo valor e retorna o mesmo
console.log(jogadores.push('DiMaria')); // Adiciona ao final
// console.log(jogadores.length); // retorna a quantidade de itens da array


// LOOPS
// Acoes repetitivas ate que alguma condicao seja atingida
for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

var i = 0;
while (i<=10) {
  // console.log(i);
  i++;
}

// Interagindo o loop com a array
for (let i = 0; i < jogadores.length; i++) {
  // console.log(jogadores[i]);
}


// Funcionalidade BREAK
var videoGames = ['ps4', 'xbox', 'switch', 'nintendo'];
for (let i = 0; i <= videoGames.length; i++) {
  // console.log(videoGames[i]);
  if(videoGames[i] === 'xbox') {
    break;
  }
}


// FOREACH
// É um metodo que executa uma funcao para cada item da array
jogadores.forEach(function(i, index) {
  // console.log(i, index);
})


// EXERCICIOS
// Crie uma array com os anos que o Brasil ganhou a copa 1959, 1962, 1970, 1994, 2002

var copasBrasil = [1959, 1962, 1970, 1994, 2002];
// console.log(copasBrasil)


// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// console.log(`O Brasil genhou a copa de ${copasBrasil[0]}`);


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let i = 0; i <= frutas.length; i++) {
  // console.log(frutas[i])
  if(frutas[i] === 'Pera') {
    break;
  }
}


// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
var UltimaFruta = frutas[frutas.length - 1];
console.log(UltimaFruta);