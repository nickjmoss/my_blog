window.onload = function() {    
    let modal = document.getElementById("modal");
    let button = document.getElementById("button");
    let close = document.getElementById("close");
    let body = document.querySelector("body");
    let window = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    let targetWidth = 768;

    button.onclick = function() {
        modal.style.display = "block";
        body.style.overflow = "hidden";
    }

    close.onclick = function () {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }

    if (window <= targetWidth) {
        let svgList = document.getElementsByTagName('svg');
        for (let svg of svgList) {
            svg.setAttribute('width', '36');
            svg.setAttribute('height', '36');
        }
    }
}