/*function somar(x,y){
    return x + y;
}*/

/*const somar = (x,y) => {  //Arrow function de mais de uma linha
    return x + y;
}*/

const somar = (x,y) => x + y; //Arrow function de uma linha, só quando o retorno é a propria função

console.log(somar (10,5));

const sobrenome = sob => 'Ivon ' + sob; //Arrow function quando só tem um parametro não precisamos usar os parenteses

console.log(sobrenome('Ferreira'))

//Usamos o const para evitar que a função seja alterada por outra variavel no meio do código