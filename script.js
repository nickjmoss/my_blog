window.onload = function() {    
    let modal = document.getElementById("modal");
    let button = document.getElementById("button");
    let close = document.getElementById("close");
    let body = document.querySelector("body");

    button.onclick = function() {
        modal.style.display = "block";
        body.style.overflow = "hidden";
    }

    close.onclick = function () {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}