function loadPosts(){
    document.querySelector("#posts").innerHTML = 'Carregando...'
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(resultado){
            return resultado.json();
        })
        .then(function(json){
            document.querySelector("#posts").innerHTML = json.length+' posts';
        })
        .catch(function(error){
            console.log('Houve um erro!');
        });
}