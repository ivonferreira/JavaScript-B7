async function enviar(){
    let arquivo = document.querySelector("#arquivo").files[0];
    let body = new FormData();
    body.append('title','Bla bla bla');
    body.append('arquivo',arquivo);
    let req = await fetch('http://www.site.com.br/upload',{
        method: 'POST',
        body: body,
        headers : {
            'Content-Type': 'multipart/form-data'
        }
    });
}