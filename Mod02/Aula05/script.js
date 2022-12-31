// ENTRADA -> PROCESSAMENTO -> SAIDA
function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`; // Retornando como dados
}

let completo = nomeCompleto('Ivon','Ferreira');// Podemos armazenar em uma var
console.log(nomeCompleto('José','Silva')); // Podemos usar em um console.log
console.log('Completo: '+completo)