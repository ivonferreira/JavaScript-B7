function apertou(){
    document.getElementById("outro").innerHTML="Apertou a tecla"
}

function segurou(){
    document.getElementById("outro").innerHTML = "Pressionou a tecla"
}
function soltou(){
    document.getElementById("outro").innerHTML = "Soltou a tecla"
}
function digitou(e){
    //console.log(e); para ver o codigo da tecla
    if(e.key == "Enter" && e.ctrlKey == true ){
        let texto = document.getElementById('campo').value;document.getElementById("outro").innerHTML = texto;
    }
}
