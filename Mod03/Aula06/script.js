function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    
   // ul.children[0].append("(alterado)");
   let newLi = document.createElement("li");
   newLi.innerText = "Item adicionado";

   ul.append(newLi);
}