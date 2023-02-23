function scrollUp() {
    if(window.scrollY === 0){
        document.querySelector('#posi').style.display = "none";
    }else{
        document.querySelector("#posi").style.display = "block";
    }
}
function toTop(x,y) {
    window.scrollTo({
        top: x,
        left:y,
        behavior:"smooth"
    });
}
//setInterval(scrollUp,500);
window.addEventListener('scroll',scrollUp);