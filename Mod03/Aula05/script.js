function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    
    //ul.innerHTML += "<li>Item alterado</li>";
    //ul.innerHTML += "<li>Item alterado 2 </li>"; 

    //ul.children[1].innerHTML = "Item Alterado";
    ul.outerHTML = "<strong>Alterado!</strong>"
}
