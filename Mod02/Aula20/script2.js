let cores = [
    {nome:'preto',qt:10},
    {nome:'azul',qt:5},
    {nome:'vermelho',qt:15}
 ];


for (let n = 0 ; n < cores.length ; n++){
    console.log(cores[n].qt);
}

/*for(let i in cores){
    console.log(cores[i].nome)

}*/
for(let i in cores){
    cores[i].nome = cores[i].nome.toUpperCase();
}
console.log(cores);
/*for(let cor of cores){
    console.log(`Nome: ${cor.nome} - Quantidade: ${cor.qt}`);
}*/