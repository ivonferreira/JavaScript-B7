//https://jsonplaceholder.typicode.com/posts

// Promise = Promessa


let firstPost = document.querySelector('#firsttitle')
function clicou(){
    //GET, POST, PUT, DELETE
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => { 
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
function inserir(){
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        }
    )
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });
}



document.querySelector('#botao').addEventListener('click',clicou);
document.querySelector('#inserir').addEventListener('click', inserir)