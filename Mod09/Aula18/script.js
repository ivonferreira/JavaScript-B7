let pessoa = {
    nome: "Ivon",
    sobrenome: "Ferreira",
    idade:39,
    social:{facebook:'ivonferreira',
            instagram:{
                url:'@ivonferreira',
                seguidores:1000}}
 
};
function pegarNomeCompleto ({nome, sobrenome, social:{instagram:{url:instagram}}}) {
        return `${nome} ${sobrenome}. Siga em ${instagram}`
}

//let {nome,sobrenome,idade} = pessoa;
//let {nome:pessoaNome,sobrenome:pessoaSobrenome,idade:pessoaIdade} = pessoa;
//let {facebook,instagram} = pessoa.social
//let {nome, idade, social:{facebook,instagram}} = pessoa
//console.log(facebook, instagram.url, instagram.seguidores)
console.log(pegarNomeCompleto(pessoa))