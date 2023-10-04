interface Humano{
    name: string // obrigatório
    idade?: number //interrogação é para valores ñ obrigatórios
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
    console.log('Olá, ' + pessoa.name)
}

function mudarNome(pessoa: Humano){
    pessoa.name = 'Joana'
}

const pessoa: Humano = {
    name: 'João',
    idade: 27,
    saudar(sobrenome: string){
        console.log('Olá, meu nome é ' + this.name + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//saudarComOla({name: 'Gui', idade: 23, altura: 180})
pessoa.saudar('Skywalker')


//Usando classes
class Cliente implements Humano {
    name: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.name + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.name = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)


//Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp:number): number {

    return Array(exp).fill(base).reduce((t,a) => t * a)
}

console.log(potencia(3, 10))
//console.log(Math.pow(3.10))
console.log(3 ** 10)