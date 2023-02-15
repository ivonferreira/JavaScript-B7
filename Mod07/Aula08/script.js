let dia = 9;
let diaNome = '';

switch(dia){
    case 1:
        diaNome = "Segunda-Feira";
        break;
    case 2:
        diaNome = "Terça-Feira";
        break;
    case 3:
        diaNome = "Quarta-Feira";
        break;
    case 4:
        diaNome = "Quinta-Feira";
        break;
    case 5:
        diaNome = "Sexta-Feira";
        break;
    case 6:
        diaNome = "Sábado";
        break;
    case 7:
        diaNome = "Domingo";
        break
    default:
        diaNome = "Não existe esse dia"
        break;
    }   
document.querySelector("#dia").innerHTML = "Hoje é "+diaNome;