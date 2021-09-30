window.onload = function() {    
    let modal = document.getElementById("modal");
    let button = document.getElementById("button");
    let close = document.getElementById("closer");

    button.onclick = function() {
        modal.style.display = 'block';
    }

    close.onclick = function () {
        modal.style.display = 'none';
    }
}