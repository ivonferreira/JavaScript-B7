function clicou(){
    const button = document.querySelector('button');
    console.log(button.classList);
   /* if (button.classList.contains('azul')){
        button.classList.remove('azul');
        button.classList.add('verde');
        //button.classList.replace('azul','verde')
    }else{
        button.classList.remove('verde');
        button.classList.add('azul');
        //button.classList.replace('verde',azul')
    }*/
    button.classList.toggle('verde')
    console.log(button.classList)
}