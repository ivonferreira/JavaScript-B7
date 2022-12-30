let isMember = false;

let shipping = isMember ? 2 : 10 //Condicional ternária é um if em uma só linha, onde colocamos a condição uma ? e as duas opções separadas por:. Podemos jogar numa variável 

console.log(isMember ? 'Vocé é membro':'Você não é membro');
console.log(`Frete: ${shipping}`)

