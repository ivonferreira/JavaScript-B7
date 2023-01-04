let nome = 'Ivon' //Variável
let nomes = ['Ivon', 'pedro'] //Array
let personagem = { //Objeto
    nome:'Ivon',
    idade:90,
    pais:'Brasil',
    olhos:['preto','azul','castanho'], //array
    caracteristicas:{ //Objeto
        forca: 20,
        magia:5,
        estamina: 15
    }
    
};

console.log(`O personagem ${personagem.nome} tem ${personagem.idade} anos de idade`); //Para chamar o elemento do objeto indicamos o nome do objeto.chave
console.log(personagem.caracteristicas.magia);//Para chamar um objeto dentro de outro objeto usamos os pontos
console.log(personagem.olhos[2]);//Para chamar um array dentro de um objeto usamos os colchetes e o numero do ordem.