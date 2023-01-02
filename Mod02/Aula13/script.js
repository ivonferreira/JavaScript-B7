let colors = ['blue', 'red','green']; //Array ou vetor
let idades = [10, 20 , 30]; //Pode conter strings, numbers, boolean, outros arrays
let listas = ['algo', 30, 'blabla', true]; //Não é necessário ser sempre o mesmo tipo
let nomes = ['Ivon', 'Pedro','silvia'];
let lista = ['lista', nomes];//inclusive variáveis e outros arrays
let lista2 = ['blabla',['xx','yy']];

console.log(colors);// Exibir o array
let outro = lista2[1]// Podemos colocar a array dentro de outra array em uma variavel

console.log(outro[0]);// Pedimos o item 0 da variavel
console.log(lista2[1][0]); // Exibir um elemento da array onde o primeiro é o 0 e assim por diante