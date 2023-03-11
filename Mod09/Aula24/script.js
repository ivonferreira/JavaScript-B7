let telefone = '55544';

console.log(telefone.padEnd(9,'*'))

let cartao = '1234123412341234'
let lastDigits = cartao.slice(-4)
let cartaoMascarado = lastDigits.padStart(16,"*")
console.log(lastDigits)
console.log(`Esse é o seu cartão ${cartaoMascarado}?`)