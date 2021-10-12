document.addEventListener("DOMContentLoaded", function() {    
    let modal = document.getElementById("modal");
    let button = document.getElementById("menu-icon");
    let close = document.getElementById("close");
    let body = document.querySelector("body");
    let sectionArrow = document.getElementById("section-arrow");


    function toggleMenuIcon() {
        button.classList.toggle("active");
        modal.classList.toggle("activeModal");
        body.classList.toggle("noScroll");
    }

    function showHideSection() {
        sectionArrow.classList.toggle("active");
    }
    sectionArrow.addEventListener("click", showHideSection);
    button.addEventListener("click", toggleMenuIcon);
})