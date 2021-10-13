document.addEventListener("DOMContentLoaded", function() {    
    let modal = document.getElementById("modal");
    let button = document.getElementById("menu-icon");
    let body = document.querySelector("body");
    let sectionHider1 = document.getElementById("section-hider-1");
    let sectionHider2 = document.getElementById("section-hider-2");
    let sectionHider3 = document.getElementById("section-hider-3");
    let section1 = document.getElementById("recent-posts");
    let section2 = document.getElementById("video");
    let section3 = document.getElementById("contact-section");
    let arrow1 = document.getElementById("section-arrow-1");
    let arrow2 = document.getElementById("section-arrow-2");
    let arrow3 = document.getElementById("section-arrow-3");
    let blogButton = document.getElementById("read-blog");
    let blogMenuButton = document.getElementById("menu-blog");
    let aboutMenuButton = document.getElementById("menu-about");
    let aboutLandingButton = document.getElementById("about-landing");
    let contactMenuButton = document.getElementById("menu-contact");


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

    function showHideSection3() {
        section3.classList.toggle("hideShow");
        arrow3.classList.toggle("rotate");
    }
    
    sectionHider1.addEventListener("click", showHideSection1);
    blogButton.addEventListener("click", showHideSection1);
    blogMenuButton.addEventListener("click", showHideSection1);
    sectionHider2.addEventListener("click", showHideSection2);
    sectionHider3.addEventListener("click", showHideSection3);
    aboutMenuButton.addEventListener("click", showHideSection2);
    contactMenuButton.addEventListener("click", showHideSection3);
    aboutLandingButton.addEventListener("click", showHideSection2);
    button.addEventListener("click", toggleMenuIcon);
})