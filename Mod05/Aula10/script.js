//https://jsonplaceholder.typicode.com/posts

// Promise = Promessa

/*
Codigos de status de respostas HTTP

Respostas de informação (100-199),
Respostas de sucesso (200-299),
Redirecionamentos (300-399)
Erros do cliente (400-499)
Erros do servidor (500-599).
*/

let firstPost = document.querySelector('#firsttitle')
function clicou(){
    fetch('https://jsonplaceholder.typicode.com/po2sts').then((response) => {
        console.log(`Status: ${response.status}`); // Status
        return response.json();
    })
    .then((response) => {
        firstPost.innerHTML =`Titulo do primeiro post:<br> ${response[0].title} <br>`;
        firstPost.innerHTML += `Post:<br> ${response[0].body}`;
    })
    .catch((e)=> {
        alert(`Não foi possivel conectar ao servidor. Erro:${e}`);
    })
    
}



document.querySelector('#botao').addEventListener('click',clicou);
