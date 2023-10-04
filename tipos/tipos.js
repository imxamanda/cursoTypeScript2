"use strict";
// string
let nome = 'João';
console.log(nome);
//nome = 28  - errado
//numbers
let idade = 27;
//idade = 'Ana  - errado
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
// possuiHobbies = 1  - errado
console.log(possuiHobbies);
//tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
//minhaIdade = 'idade é 27'
//console.log(typeof minhaIdade)
//array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
//hobbies = 100
console.log(hobbies);
//tuplas
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Show", 1892, "Apt 707"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Branco"] = 1] = "Branco";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 22] = "Azul";
    Cor[Cor["Laranja"] = 23] = "Laranja";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Cinza);
console.log(Cor.Branco);
console.log(Cor.Azul);
console.log(Cor.Laranja);
console.log(Cor.Vermelho, Cor.Verde);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
