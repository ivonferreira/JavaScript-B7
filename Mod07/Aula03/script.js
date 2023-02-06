function azul(){
    limpar();
    document.getElementById('titulo').classList.add('azul')
    
}
function vermelho(){
    limpar();
    document.getElementById('titulo').classList.add('vermelho');
}
function verde(){
    limpar();
    document.getElementById('titulo').classList.add('verde');
}

function limpar(){
    document.getElementById('titulo').classList.remove('azul');
    document.getElementById('titulo').classList.remove('vermelho');
    document.getElementById('titulo').classList.remove('verde');
}
function mostrar(){
    let telefone = document.getElementById('telefone')
    if (telefone.classList.contains("oculto")){
        telefone.classList.remove("oculto");
        document.getElementById("botao").innerHTML = "Esconder telefone";
    }else{
        telefone.classList.add("oculto");
        document.getElementById("botao").innerHTML = "Mostrar telefone";
    }
    
}
