let ingredientes = [ //Podemos criar arrays vazios e adicionar depois
    'agua',
    'farinha',
    'ovo',
    'fermento',
    'açucar'
];

ingredientes[5] = 'leite'// adicionar um item, indicamos o numero onde deve entrar o novo item
ingredientes.push('sal')// adicionamos um item sempre no ultimo valor. É o mais indicado para adicionar items em uma array
//caso indiquemos um numero que já existe, ele vai substituir, caso seja um numero maior que o ultimo, ele criará espaço vazio para completar
console.log(`Total de ingredientes: ${ingredientes.length}`) //length quantidade de itens na array
console.log(ingredientes)

