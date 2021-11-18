document.addEventListener("DOMContentLoaded", function() {
    $('#menu-icon').click(function() {
        $('#menu-icon').toggleClass('active');
        $('#modal').toggleClass('active');
        $('body').toggleClass('noScroll');
    });

    $('#login-button').click(function() {
        $('#form').toggleClass('active')
        $('#form-close').toggleClass('active');
        $('body').toggleClass('noScroll');
        $('#menu-icon').toggleClass('hide');
    });

    $('#form-close').click(function() {
        $('#form').toggleClass('active')
        $('#form-close').toggleClass('active');
        $('body').toggleClass('noScroll');
        $('input').val("");
        $(':input').attr('class', '')
        $('#submit').val("Submit")
        $('#menu-icon').toggleClass('hide');
    });

    $('#submit').click(function() {
        $('form').submit()
    })

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

    $('#dark-mode-button').click(function() {
        if (localStorage.getItem('theme') == 'dark') {
            $("link[rel='stylesheet'][href$='dark-mode.css']").remove();
            localStorage.setItem('theme', '')
            $('#theme-icon').removeClass()
            $('#theme-icon').addClass('far fa-sun')

        }
        else{
            $("<link rel='stylesheet' href='assets/css/dark-mode.css'>").appendTo("head");
            localStorage.setItem('theme', 'dark')
            $('#theme-icon').removeClass()
            $('#theme-icon').addClass('far fa-moon')
        }
    });
});

