//https://jsonplaceholder.typicode.com/posts
let firstPost = document.querySelector('#firsttitle')
function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
        return data.json();
    })
    .then((data) => {
        firstPost.innerHTML =`Titulo do primeiro post:<br> ${data[0].title} <br>`;
        firstPost.innerHTML += `Post:<br> ${data[0].body}`;
    })
}

document.querySelector('#botao').addEventListener('click',clicou);
