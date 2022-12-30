let idade = 60;
if (idade < 18){
    console.log('Você é uma criança'); // else if as condições são dependentes, ou seja se a primeira já satisfez ele não verifica as próximas.
}
else if (idade >=18 && idade < 60){
    console.log('Você é um adulto');
}
else if (idade >= 60){
    console.log ('Você é um idoso')
}