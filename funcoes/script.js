// calcula a area do quadrado
function areaQuadrado(lado) {
  return lado * lado;
}
// console.log(areaQuadrado(5));


// Utiliza a função para multiplicar a variavel
function multiplicador() {
  return 5;
}
var numero1 = 10 * multiplicador();
// console.log(numero1);


// Peso e altura sao os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}
// console.log(imc(70, 1.75)) // 70 e 1.75 são os argumentos


// Parênteses executa a função
function timeFavorito(time) {
  if (time === 'Flamengo') {
    return 'Maior do mundo!';
  } else if (time === 'Vasco') {
    return 'Que pena de você!'
  } else {
    return 'você não gosta de futebol?'
  }
}
// console.log(timeFavorito())


// Argumentos podem ser funções
addEventListener('click', () => {
  // console.log('clicou');
})
// A função possui dois argumentos, o primeiro é a string 'click' e o segundo é uma função anônima


// utiliza da funcao para criar um evento
function teste() {
  // console.log('teste');
}
addEventListener('click', teste);


// Uma função pode retornar qualquer tipo de dado e até outras funções
function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'informe sua idade';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
// console.log(terceiraIdade(70));


// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele
function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} paises!`;
}
// console.log(faltaVisitar(93));


// Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Designer';
function dados() {
  var nome = 'Haroldo';
  var idade = 20;
  function outrosDados() {
    var endereco = 'Petrópolis';
    var idade = 21;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
// console.log(dados());
// outrosDados(); retorna um erro, pois nao foi definida


// Hoisting
imc(70, 1.75); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  // console.log(imc);
}
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória


// EXERCÍCIO

// Crie uma função para verificar se um valor é Truthy
function valorVerdadeiro(nome) {
  if (nome === 'Haroldo') {
    return true;
  } else {
    return false;
  }
}
console.log(valorVerdadeiro('Haroldo'));

// Crie uma função matemática que retorne o perímetro de um quadrado lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(4));

// Crie uma função que retorne o seu nome completo ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + ' ' + sobrenome
}
console.log(nomeCompleto('Haroldo', 'Mayworm'));

// Crie uma função que verifica se um número é par
function numeroPar(numero) {
  if (numero % 2 === 0) {
    return 'É um numero par';
  } else {
    return 'É um numero impar';
  }
}
console.log(numeroPar(7));

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof dado
}
console.log(tipoDado(11))

// addEventListener é uma função nativa do JavaScript o primeiro parâmetro é o evento que ocorre e o segundo o Callback 
// utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
addEventListener('scroll', () => {
  console.log('Haroldo Mayworm')
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
// Faltou definir a variavel no escopo global


// Codigo antigo
// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);