let count = 0; // Definindo a variavel fora da função, então tenho acesso dentro da função => Variavel de escopo global
function add(){
    //let count = 0;// definindo a variavel dentro da função ela não terá acesso fora da função => variavel de escopo local ou privada
    let count = 0; // Caso tenhamos a variavel com mesmo nome ela dará preferencia a variavel de escopo local
    count++;
}

add();
add();

console.log(count);