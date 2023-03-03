let lista = [45, 4, 9, 16, 25];
let lista2 = []

/* map para duplicar itens do array
lista2 = lista.map(function(item){
    return item*2;
})*/

/* filtro de itens divisiveis por 5 do array
lista2 = lista.filter(function(item){
    if(item%5 == 0){
        return true;
    }else{
        return false;
    }
})*/

/*Todos os itens do array são maiores de 20? true ou false
lista2 = lista.every(function(item){
    if(item > 20){
        return true
    }else{
        return false
    }
})*/
/*algum dos itens do array são pares? true ou false
lista2 = lista.some(function(item){
    if(item%2 ==0){
        return true;
    }else{
        return false
    }
})*/
/*some em uma só linha
lista2 = lista.some(function(item){return(item<20)? true : false;})*/
let res = lista2;

console.log(res);