document.addEventListener("DOMContentLoaded", function() {    
    let modal = document.getElementById("modal");
    let button = document.getElementById("menu-icon");
    let body = document.querySelector("body");
    let sectionHider1 = document.getElementById("section-hider-1");
    let sectionHider2 = document.getElementById("section-hider-2");
    let section1 = document.getElementById("recent-posts");
    let section2 = document.getElementById("video")
    let arrow1 = document.getElementById("section-arrow-1");
    let arrow2 = document.getElementById("section-arrow-2");
    let blogButton = document.getElementById("read-blog");


    function toggleMenuIcon() {
        button.classList.toggle("active");
        modal.classList.toggle("activeModal");
        body.classList.toggle("noScroll");
    }

    function showHideSection1() {
        section1.classList.toggle("hideShow");
        arrow1.classList.toggle("rotate");
    }

    function showHideSection2() {
        section2.classList.toggle("hideShow");
        arrow2.classList.toggle("rotate");
    }
    
    sectionHider1.addEventListener("click", showHideSection1);
    blogButton.addEventListener("click", showHideSection1);
    sectionHider2.addEventListener("click", showHideSection2);
    button.addEventListener("click", toggleMenuIcon);
})