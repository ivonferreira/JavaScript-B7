let cores = ['preto','branco','azul','vermelho','verde', 'amarelo' ];
cores.push('roxo');

/*for (let n = 0 ; n < cores.length ; n++){
    console.log(cores[n]);
}//Para um loop for num array usamos o contador como a posição da array e a condição de execução é que o contador seja a quantidade de item(length) do array*/

/*for(let i in cores){//O in substitui todo o conjunto de parametros para o for
    console.log(cores[i])

    }*/
for(let cor of cores){//Fazendo a forma anterior só mais amigavel para o entendimento
    console.log(cores[cor]);
}