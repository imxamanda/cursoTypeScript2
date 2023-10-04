// string
let nome: string = 'João'
console.log(nome)
//nome = 28  - errado

//numbers
let idade: number = 27
//idade = 'Ana  - errado
idade = 27.5

console.log(idade)

//boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1  - errado
console.log(possuiHobbies)

//tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
//minhaIdade = 'idade é 27'
//console.log(typeof minhaIdade)

//array

let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
//hobbies = 100
console.log(hobbies)

//tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

endereco = ["Rua Show", 1892, "Apt 707"]
console.log(endereco)

// enums
enum Cor {
    Cinza, //0
    Branco,
    Verde = 100, //100
    Azul = 22, //22
    Laranja,
    Vermelho = 100

}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Cinza)
console.log(Cor.Branco)
console.log(Cor.Azul)
console.log(Cor.Laranja)
console.log(Cor.Vermelho, Cor.Verde)

// any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)