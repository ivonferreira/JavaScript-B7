//https://jsonplaceholder.typicode.com/posts

// Promise = Promessa
let firstPost = document.querySelector('#firsttitle')
function clicou(){
    let req = fetch('https://jsonplaceholder.typicode.com/posts') 
    
    req.then((data) => { // Assincrona 
        return data.json();
    })
    .then((data) => {
        firstPost.innerHTML =`Titulo do primeiro post:<br> ${data[0].title} <br>`;
        firstPost.innerHTML += `Post:<br> ${data[0].body}`;
    });

    alert('Opa, Clicou!'); // Sincrono
}



document.querySelector('#botao').addEventListener('click',clicou);
