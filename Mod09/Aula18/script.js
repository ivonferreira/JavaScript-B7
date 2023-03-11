let info = ['Ivon Ferreira','Ivon','Ferreira','@ivonferreira'];

let [nomeCompleto, , , instagram ] = info;
console.log(nomeCompleto,instagram)

let [nome2,sobrenome2,idade2=39] = ['ivon','ferreira']
console.log(nome2,sobrenome2,idade2)

function criar(){
    return [1,2,3];
}

let [a,b,c] = criar();

console.log(a,b,c)