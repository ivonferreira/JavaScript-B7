let fruits = ['Banana', 'Laranja','Maça', 'Pêra']

let bigFruits = fruits.filter((item) => {//Filtra os item com mais que 4 letras
    return item.length > 4;// modifica o array
    }
);
console.log(bigFruits);