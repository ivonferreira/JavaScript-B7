function validar(user, password){
    if (user==='pedro' && password==='123'){
        return true;
    }else{
        return false;
    }
}
let usuario = 'ivon'
let senha = '1234'
let validacao = validar(usuario,senha)
if (validacao){
    console.log ('Acesso concedido.');
}else{
    console.log('Acesso NEGADO, usuário ou senha inválidos!');
}