/*https://jsonplaceholder.typicode.com/posts */

async function load(){
    let post = document.querySelector(".posts");
    post.innerHTML = 'Carregando...';
    
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let jsonres = await response.json();
    
    if (jsonres.length > 0 ){
        post.innerHTML = '';
        
        for (let i = 0 ; i < 100 ;i++){
            let postHtml = `<div><h2>${jsonres[i].title}</h2>${jsonres[i].body}</div>`
            post.innerHTML += postHtml;
        };
    }else{
        post.innerHTML = 'Nenhum Post para exibir'
    }
}

async function addNewPost(title, body){
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
        
    );
    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';
    load();

};

document.querySelector('#insertButton').addEventListener('click',() =>{
    let newTitle = document.querySelector('#titleField').value;
    let newBody = document.querySelector('#bodyField').value;
    if (newTitle && newBody){
        addNewPost(newTitle, newBody);
    }else{
        alert('Por favor inserir titulo ou postagem');
    }
});
load();