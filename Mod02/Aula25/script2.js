let fruits = ['Banana', 'Laranja','Maça', 'Pêra', 'Uva']

let ok = fruits.every((value) => {//Every só retorna true se todos os items do array satisfazerem as condições para se algum item usamos no lugar do every o some
    return value.length > 3;
});
if(ok){
    console.log('Todos são maiores que 3')
}else{
    console.log('Não são todos maiores que 3')
}