// Variaveis declaradas dentro de uma funcao, nao sao acessiveis fora dela
function marcaCelulares() {
  let celular = 'Iphone';
  console.log(celular);
}
// marcaCelulares(); // Funciona normalmente
// console.log(celular) // alerta que 'celular' nao foi definido 

// Caso a variavel tenha sido criada fora da funcao, pode ser utilizada
var carro = 'Fox';
function carroMarca() {
  console.log(carro);
}
// carroMarca();


// Escopo de Bloco
// A variavel pode ser acessada externamente se for VAR
// Caso seja LET ou CONST, nao vaza do bloco
if(true) {
  var comida = 'arroz';
  // console.log(comida)
}
// console.log(comida)

{
  var carro = 'Fusca';
  const ano = 2018;
}
// console.log(carro); // Fusca
// console.log(ano); // erro ano is not defined



// EXERCICIOS

// Por qual motivo o código abaixo retorna com erros?

{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
// console.log(cor, marca, portas);
//Const e let estao dentro do bloco e nao vazam



// Como corrigir o erro abaixo?

// function somarDois(x) {
//   const dois = 2;
//   return x + dois;
// }
// function dividirDois(x) {
//   return x + dois;
// }
// somarDois(4);
// dividirDois(6);

const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);



// O que fazer para total retornar 500?

// var numero = 50;
// for(var numero = 0; numero < 10; numero++) {
//   console.log(numero);
// }
// const total = 10 * numero;
// console.log(total);

var numero = 50;
for(let numero = 0; numero < 10; numero++) { // Mudar VAR pata LET
  console.log(numero);
}
const total = 10 * numero;
console.log(total);
