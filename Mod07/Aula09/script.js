let texto = "";
for(let i = 1; i <= 50 ;i++){
    texto = texto + i + "<br>";
}
document.querySelector("#demo").innerHTML = texto;

let carros = ['Ferrari','Fusca','Palio','Corolla','Cruze'];
let html = '<ul>';
for(let c in carros){
    
    html += '<li>'+ carros[c] +'</li>'
}
html += '</ul>';
document.querySelector("#arr").innerHTML = html;