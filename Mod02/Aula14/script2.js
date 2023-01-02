let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'fermento',
    'açucar'
];

ingredientes.pop(); //Apaga o ultimo item do array
ingredientes.shift(); //Apaga o primeiro item do array, automaticamente o elemento que era o 1 passará a ser o 0 e assim em diante.

console.log(ingredientes);
console.log(ingredientes.length)