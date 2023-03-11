let d = new Date();
//d.setFullYear()
//d.setMonth()
//d.setDay() Dia da semana de 0 a 6
//d.setDate() Pode ser o dia ou d.getDate() + (ou - ) dias a mais 
//d.setHours() Funciona igual ao setDate

d.setHours(d.getHours()+520);
let res = d.toString();

console.log(res)