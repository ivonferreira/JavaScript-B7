/*Primeira forma de criar função
function somar(x,y){
    return x+y;
};*/ 

/*Segunda forma, usando uma variável como nome da função
let somar = function (x,y){
    return x+y;
};*/

//let somar = (x,y) => {return x+y} Arrow function com chaves;

let somar = (x,y) => x+y;//Arrow function sem chaves já tem o return imbutido

let letrasNoNome = nome => nome.length // Função de 1 parametro o parenteses é opcional

console.log(somar(5,7))