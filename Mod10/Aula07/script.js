function pegarTemp(){
    return new Promise(function(resolve, reject){
        console.log("Pegando a temperatura...");
        setTimeout(function(){
            resolve('40 na sombra');
        }, 2000);
    });
}
//Usando a Promise
console.log("Código antes");

let temp = pegarTemp();

console.log("Código durente")

//assincrono
temp.then(function(resultado){
    console.log("Temperatura: "+resultado)
});

temp.catch(function(error){
    console.log("Houve um erro")
});
//fim do assincrono
console.log("Código depois!")