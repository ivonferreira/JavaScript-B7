let idade = 131;

if (idade >= 18 && idade < 60){// && - e,and a condicional só satisfaz se as duas forem verdadeiras || - ou,or satisfaz se uma das duas forem verdadeiras
    console.log('Você é um adulto')
}else if(idade <18){
    console.log('Vocè é uma criança')
}else if(idade<130){
    console.log('Você é um idoso')
}else{
    console.log('Você é um matusalém')
}