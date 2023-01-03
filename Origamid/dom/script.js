// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
console.log(window);

console.log(window.innerHeight);

var txt = document.querySelector('p')
console.log(txt)

// NODE
//  Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.
const titulo = document.querySelector('h1');
titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;


// EXERCICIOS 
// Retorne o url da página atual utilizando o objeto window

var url = window.location.href.toString();
console.log(url);


// Seleciona o primeiro elemento da página que possua a classe ativo

const primeiroElemento = document.querySelector('.ativo')
console.log(primeiroElemento);


// Retorne a linguagem do navegador

const linguaNav =  navigator.language;
console.log(linguaNav)

// Retorne a largura da janela 
console.log(window.innerWidth);