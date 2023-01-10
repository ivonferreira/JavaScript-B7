function clicou(){
    const input = document.querySelector('input');
    const atbph = input.getAttribute('placeholder');
    const btn = document.querySelector('.botao')
    
    /*
    if(input.hasAttribute('placeholder')){
        console.log('Tem placeholder');
        input.setAttribute('placeholder','Placeholder Alterado')
    }else{
        console.log('Não tem placeholder');
    }*/
    
    if(input.getAttribute('type')==='password'){
        input.setAttribute('type','text');
        btn.innerHTML = 'Esconder senha'
    }else if(input.getAttribute('type')==='text'){
        input.setAttribute('type','password');
        btn.innerHTML = 'Mostrar senha'
    }
    
}