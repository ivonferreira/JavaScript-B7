function toggleMenu(){
    let menuArea = document.querySelector("#menu-area");
    if (menuArea.style.width == "0px"){
        menuArea.style.width = "200px";
    }else{
        menuArea.style.width = "0px";
    }
}

function menuToggle(){
    let menuArea = document.querySelector("#menu-area");
    if(menuArea.classList.contains("opened")){
        menuArea.classList.remove("opened");
    }else if (menuArea.classList.contains("closed")){
        menuArea.classList.add("opened");
    }
}