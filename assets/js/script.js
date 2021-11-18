// CHANGES:
// * I changed my mobile-menu button function to use jQuery
// * I added a login button and a close form button that both make use
// of jQuery.
// * I changed my getGitHubInfo function to use jQuery.
// * The script is used across the whole site and so is my validate.js file so you can
// login from any page.
$(function() {
    // Menu button function, opens the menu for mobile
    $('#menu-icon').click(function() {
        $('#menu-icon').toggleClass('active');
        $('#modal').toggleClass('active');
        $('body').toggleClass('noScroll');
    });

    // Opens the form modal for logging info
    $('#login-button').click(function() {
        $('#form').toggleClass('active')
        $('#form-close').toggleClass('active');
        $('body').toggleClass('noScroll');
        $('#menu-icon').toggleClass('hide');
    });

    // Function that happens when the form is closed
    $('#form-close').click(function() {
        $('#form').toggleClass('active')
        $('#form-close').toggleClass('active');
        $('body').toggleClass('noScroll');
        $('input').val("");
        $(':input').attr('class', '')
        $('#submit').val("Submit")
        $('#menu-icon').toggleClass('hide');
        $(".form-group2").show()
        $(".thanks-message").hide();
        $('input[type="checkbox"]').prop('checked', false);
    });

    // Function that happens when the form is closed
    $('#back-button').click(function() {
        $('#form').toggleClass('active')
        $('#form-close').toggleClass('active');
        $('body').toggleClass('noScroll');
        $('input').val("");
        $(':input').attr('class', '')
        $('#submit').val("Submit")
        $('#menu-icon').toggleClass('hide');
        $(".form-group2").show()
        $(".thanks-message").hide();
        $('input[type="checkbox"]').prop('checked', false);
    });

    // Uses GitHub API to insert info into projects page
    function getGithubInfo() {
        let url = "https://api.github.com/users/nickjmoss"
        const fetchPromise = fetch(url);
        fetchPromise.then(response => {
            return response.json();
        }).then(data => {
            let profilePic = data.avatar_url;
            let bio = data.bio;
            let link = data.html_url;

            $("#github-img").src = profilePic
            $("#github-bio").innerHTML = bio
            $("#github-link").href = link;
        })
    }

    // Function to initiate dark mode
    // Makes use of Local Storage to maintain the theme previously selected
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

