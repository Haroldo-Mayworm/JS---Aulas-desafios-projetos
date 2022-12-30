// Objetos sao um conjunto de variaveis e/ou funcoes
var pessoa = {
  nome: 'Haroldo Mayworm',
  idade: 21,
  corFavorita: 'preto',
}
// console.log(pessoa.nome);
// console.log(typeof pessoa);


// Propriedades podem possuir funcoes no local do valor
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}
// console.log(quadrado.lados);
// console.log(quadrado.perimetro(5));

// Outra forma de passar os metodos
var quadrado2 = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}
// console.log(quadrado2.lados);
// console.log(quadrado2.perimetro(3));


// Dot notation get
var menu = {
  width: 800,
  heigth: 100,
  backgroundColor: '#0f0',
}

// Pode-se trazer como var, const...
var bg = menu.backgroundColor;
// console.log(bg);


// Dot notation set
menu.backgroundColor = '#f0f';
// console.log(menu.backgroundColor);

// Adicionar metodos e propriedades
menu.fontFamily = 'arial';
// console.log(menu.fontFamily);

menu.executar = function() {
  console.log('Executou');
}
// menu.executar();

// + uma explicacao do this
var heigth = 100;
var div = {
  width: 100,
  heigth: 50,
  metadeHeigth: function() {
    // console.log(heigth / 2); Dessa forma ele puxa a var heigth
    console.log(this.heigth / 2); // Dessa forma ele puxa o heigth do objeto
  },
}
// div.metadeHeigth()


// Prototipo e heranca
//verifica se axiste a propriedade
var triangulo = {
  lados: 3,
}
// console.log(triangulo.hasOwnProperty('lados'));


// EXERCICIOS

// Crie um objeto com os seus dados pessoais. Deve possui pelo menos duas propriedades nome e sobrenome
var eu = {
  nome: 'Haroldo',
  sobrenome: 'Mayworm',
  idade: 21,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
} 

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Latiu';
    } else {
      return 'Nao latiu'
    }
  }
}
// console.log(cachorro.latir('homem'));