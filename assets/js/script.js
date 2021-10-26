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

    function getGithubInfo() {
        let url = "https://api.github.com/users/nickjmoss"
        const fetchPromise = fetch(url);
        fetchPromise.then(response => {
            return response.json();
        }).then(data => {
            let profilePic = data.avatar_url;
            let bio = data.bio;
            let link = data.html_url;

            document.getElementById("github-img").src = profilePic
            document.getElementById("github-bio").innerHTML = bio
            document.getElementById("github-link").href = link;
        })
    }

});