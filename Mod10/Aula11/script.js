async function postar(){
    document.querySelector("#posts").innerHTML = "Carregando..."
    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body:JSON.stringify({
            title:'Titulo de teste',
            body:'Corpo do teste',
            userId:4
        }),
        header: {
            'Content-Type':'application/json'
        }
    });
    let json = await req.json();
    console.log(json)
}