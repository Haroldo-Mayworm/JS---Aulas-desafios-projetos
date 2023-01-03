// Operadores de atribuicao
x = 5;
y = 12;
x += y; // x + y 
x -= y; // x - y 
x *= y; // x * y 
x /= y; // x / y
x %= y; // x % y
x **= y; // x ** y

// Operador ternario
var possuiHabilitacao = true;
var acompanhado = false;
var podeDirigir = (possuiHabilitacao === true || acompanhado === true) ? 'Pode dirigir!' : 'Nao poderá dirigir!';
// console.log(podeDirigir);


// EXERCICIOS

// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll

var scroll = 1000;
scroll += 500;
// console.log(scroll)


// Atribua true para a variável darCredito, caso o cliente possua carro e casa. E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;

var darCredito = (possuiCarro === true && possuiCasa === true);
// console.log(darCredito);
