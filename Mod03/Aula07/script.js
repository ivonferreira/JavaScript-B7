function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    
    //newButton = document.createElement("button");
    //newButton.innerHTML = "Botão 2"
    
    //ul.before(newButton);
    const newUL = document.createElement("ul");
   
    for (let i = 0; i < 5;i++){
        const newLi = document.createElement("li");
        newLi.innerHTML = "item adicionado n."+(i+1);
        newUL.append(newLi);
    }
    ul.before(newUL);
}
