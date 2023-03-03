let lista = [45, 4, 9, 16, 25];
let lista2 = []
let usuarios = [
    {id:1, nome:'Ivon', sobrenome:'Ferreira'},
    {id:2, nome:'Deise', sobrenome:'Teixeira'},
    {id:3, nome:'Maria', sobrenome:'Alves'},
    {id:4, nome:'Rui', sobrenome:'Ventura'}
]

/*lista2 = lista.find(function(item){return(item<5)? true:false;
})*/
/*lista2 = lista.findIndex(function(item){return(item<5)? true:false;
})*/
let pessoa = usuarios.findIndex(function(item){return(item.sobrenome == "Teixeira")? true:false;})
let res = pessoa;

console.log(res);