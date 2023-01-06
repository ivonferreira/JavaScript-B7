let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];
fruits.push('Goiaba'); //Push adicionar no final
console.log(fruits);
console.log(fruits.length); //length quantidade
fruits.pop() //Remove o ultimo item
fruits.shift() //Remove o primeiro item
fruits.join(' '); //Une os itens como uma string unida pelo separador que está no parenteses
console.log(fruits.join('=>'))//Não modifica o array, ele é um novo dado
fruits[0]='Pera' //Altera o primeiro item do array
fruits[fruits.length - 1] = 'Carambola' //Altera o ultimo item do array
console.log(fruits)

