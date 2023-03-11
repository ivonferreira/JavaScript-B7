let numeros = [1,2,3,4];

let outros = [5,...numeros,6,7,8];
console.log(outros)

let info = {nome:'Ivon',
            sobrenome:'Ferreira',
            idade: 39
};

let novaInfo = {
    ...info,
    cidade:'Palmares',
    estado:'PE',
    pais:'Brasil'

};
console.log(novaInfo)

function adicionarInfo(infor){
    let novasInfo = {
        ...infor,
        status:0,
        token:'9i39j9j39',
        data_cadastro:'01082019'
    }
    return novasInfo;
}

console.log(adicionarInfo({nome2:'Ivon',sobrenome2:'Ferreira'}))