let pessoa = {
    nome: "Ivon",
    sobrenome: "Ferreira",
    idade:39,
    social:{facebook:'ivonferreira',
            instagram:'ivon.ferreira'},
    nomeCompleto: function () {
            return `${this.nome} ${this.sobrenome}`
    }
};

//let {nome,sobrenome,idade} = pessoa;
let {nome:pessoaNome,sobrenome:pessoaSobrenome,idade:pessoaIdade} = pessoa;

console.log(pessoaNome, pessoaSobrenome, pessoaIdade)