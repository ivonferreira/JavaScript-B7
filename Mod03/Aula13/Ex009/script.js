
let input = document.querySelector('input');
const lista = document.querySelector('ul');
input.addEventListener('keyup', soltou);

function soltou(e){
    if(e.key==='Enter'){
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        lista.appendChild(newLi);
        input.value = '';
    }
}



