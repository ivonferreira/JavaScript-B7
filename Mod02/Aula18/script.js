let pessoa = {
    nome:'Ivon',
    sobrenome:'Ferreira',
    idade:90,
    nomeCompleto: function(){//Função dentro de um objeto
        return `${this.nome} ${this.sobrenome}`;//Para acessar os items de um objeto usamos o this.item //As arrow funcion não tem acesso ao this pois é uma função anonima
    }
}

console.log(pessoa.nomeCompleto());