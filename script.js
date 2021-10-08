document.addEventListener("DOMContentLoaded", function() {    
    let modal = document.getElementById("modal");
    let button = document.getElementById("menu-icon");
    let close = document.getElementById("close");
    let body = document.querySelector("body");

    function toggleMenuIcon() {
        button.classList.toggle("active");
    }

    button.addEventListener("click", toggleMenuIcon);
})