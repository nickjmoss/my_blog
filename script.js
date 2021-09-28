const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

//Toggle mobile menu
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        toggle.querySelector("a").innerHTML  = "<i class='fa fas-bars'></i>"
    } else {
        menu.classList.add("active");

        toggle.querySelector("a").innerHTML = "<i class='fa fas-times'></i>"
    }
 }

 toggle.addEventListener("click", toggleMenu, false);