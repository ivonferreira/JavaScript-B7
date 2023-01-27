//https://jsonplaceholder.typicode.com/posts

// Promise = Promessa


let firstPost = document.querySelector('#firsttitle')
async function clicou(){ // Força a função ser assincrona
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json();
    alert(`titulo: ${json[0].title}`);
    firstPost.innerHTML =`Titulo do primeiro post:<br> ${json[0].title} <br>`;
    firstPost.innerHTML += `Post:<br> ${json[0].body}`;
    alert('clicou');
}
async function inserir(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',
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
    );
    let json = await response.json();
    console.log(json);
    }



document.querySelector('#botao').addEventListener('click',clicou);
document.querySelector('#inserir').addEventListener('click', inserir)