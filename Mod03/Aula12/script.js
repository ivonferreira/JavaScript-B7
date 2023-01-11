function soltou(e){
    console.log(e.code);
    console.log(e.key);
    console.log(e.shiftKey);
}
const input = document.querySelector('input');
input.addEventListener('keyup',soltou);