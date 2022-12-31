function maiorDeIdade(idade){
    if(idade >= 18){
        return true;
    }else{
        return false;
    }
}
let idade = 5;
let maioridade = maiorDeIdade(idade);
if(maioridade){ // Se o resultado de uma variavel é boolean podemos só coloca-la como condição do if
    console.log('Maior de idade');
}else{
    console.log('Menor de idade');
}