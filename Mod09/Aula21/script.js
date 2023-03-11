function adi(...numeros){
    console.log(numeros)
};
adi(5,6,7,8,9,10,'ivon');



function adicionar(nome,...novosNomes){
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ]
    return novoConjunto;
}

let nomes = ["Ivon","Carlos"];
let outros = adicionar(nomes, "Antonio","Maria","José")
console.log(outros)