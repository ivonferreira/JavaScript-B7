function calcularImovel(m, q){
    let valor = m * 3000;
    /*if(q==2){
        
        return  valor*1.2;
    }else if(q==3){
        return  valor*1.5;
    }else{
        return valor;
    }*/
    switch (q){
        case 1:
        defaut:
            return valor;
            break;
        case 2:
            return valor*1.2;
            break;
        case 3:
            return valor*1.5;
            break;
    }
}

let metragem =123;
let quartos =3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);