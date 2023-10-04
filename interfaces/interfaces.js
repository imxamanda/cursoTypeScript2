"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.name);
}
function mudarNome(pessoa) {
    pessoa.name = 'Joana';
}
const pessoa = {
    name: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.name + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({name: 'Gui', idade: 23, altura: 180})
pessoa.saudar('Skywalker');
//Usando classes
class Cliente {
    constructor() {
        this.name = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.name + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.name = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
//console.log(Math.pow(3.10))
console.log(3 ** 10);
