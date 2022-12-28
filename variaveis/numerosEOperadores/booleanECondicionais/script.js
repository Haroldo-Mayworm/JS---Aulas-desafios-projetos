var possuiCelular = false,
    possuiCarro = false;

if(possuiCarro) {
  console.log('Vai de carro.');
} else {
  console.log('Melhor pegar um taxi.');
}

if(possuiCarro) {
  console.log('Vai de carro.');
} else if(possuiCelular) {
  console.log('Pede um uber.');
} else {
  console.log('Pega um onibus.');
}


if(10>5) {
  console.log('É maior');
} else {
  console.log('É menor');
}

var condicional = (5-10) && (5+5);
if(condicional) {
  console.log('verdadeiro');
} else {
  console.log('falso');
}

var condicional2 = (5-5) || (10-5-5) || (10+2);
console.log(condicional2);


var corFavorita = 'azul'

switch(corFavorita) {
  case 'preto':
    console.log('Feche os olhos.');
    break;
  case 'azul':
    console.log('Olhe para o ceu.');
    break;
  case 'verde':
    console.log('Olhe para a floresta.');
    break;
  default:
    console.log('Repense sua escolha');
}



// EXERCICIOS

// Verifique se a sua idade é maior do que a de algum parente. Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 21,
    idadeAlheia = 29;

if(minhaIdade>idadeAlheia) {
  console.log('É maior!');
} else if(minhaIdade===idadeAlheia) {
  console.log('É igual!');
} else {
  console.log('É menor!')
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao) // 3


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil>china) {
  console.log('Brasil tem mais habitantes!');
} else {
  console.log('China tem mais habitantes!');
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// false - Pois retorna a primeira falsa


// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
// cão - Pois retorna a primeira verdadeira