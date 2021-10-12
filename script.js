document.addEventListener("DOMContentLoaded", function() {    
    let modal = document.getElementById("modal");
    let button = document.getElementById("menu-icon");
    let close = document.getElementById("close");
    let body = document.querySelector("body");
    let sectionArrow = document.getElementById("section-arrow");
    let icon = document.getElementById("icon");
    let section = document.getElementById("recent-posts")


    function toggleMenuIcon() {
        button.classList.toggle("active");
        modal.classList.toggle("activeModal");
        body.classList.toggle("noScroll");
    }

    function showHideSection() {
        icon.classList.toggle("fa-rotate-90");
        section.classList.toggle=(".hide-section");
    }
    sectionArrow.addEventListener("click", showHideSection);
    button.addEventListener("click", toggleMenuIcon);
})