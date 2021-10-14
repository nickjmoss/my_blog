document.addEventListener("DOMContentLoaded", function() {    
    let modal = document.getElementById("modal");
    let button = document.getElementById("menu-icon");
    let body = document.querySelector("body");


    function toggleMenuIcon() {
        button.classList.toggle("active");
        modal.classList.toggle("activeModal");
        body.classList.toggle("noScroll");
    }
    
    button.addEventListener("click", toggleMenuIcon);
})