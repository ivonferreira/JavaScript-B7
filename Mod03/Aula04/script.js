function clicou(){
    console.log('Clicou no botao!');
}

let botao = document.querySelector('.botao');
//botao.addEventListener("click", clicou);
//botao.addEventListener("click", function(){clicou(); });
botao.addEventListener("click", () => {clicou()});