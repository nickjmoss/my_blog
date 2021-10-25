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

    // Adds most recent GitHub Repos to Featured Grid on Projects Page
    function getGithubRepos() {
        let githubApi = "https://api.github.com/users/nickjmoss/repos"
        const fetchPromise = fetch(githubApi);
        fetchPromise.then(response => {
            return response.json();
        }).then(data => {
            let projectId = 1;
            for (let repoData of data) {
                let repoName = repoData.name;
                let repoLang = repoData.language;
                let repoDesc = repoData.description;
                let repoLink = `https://github.com/nickjmoss/${repoName}`;

                let finalName = ''

                if (repoName.includes('_')) {
                    let nameList = repoName.split('_');
                    for (let i = 0; i < nameList.length; i++) {
                        let myWord = nameList[i].charAt(0).toUpperCase() + nameList[i].slice(1);
                        nameList[i] = myWord;
                    }
                    finalName = nameList.join(' ');
                }
                else {
                    finalName = repoName.charAt(0).toUpperCase() + repoName.slice(1);
                }
                
                document.getElementById(`project-item-${projectId}`).children[0].children[0].innerHTML=finalName;
                document.getElementById(`project-item-${projectId}`).children[0].children[1].innerHTML=repoLang;
                document.getElementById(`project-item-${projectId}`).children[0].children[2].innerHTML=repoDesc;
                document.getElementById(`project-item-${projectId}`).children[1].children[0].href=repoLink;

                projectId++;
                
                
            }    
        })
        
    }
    getGithubRepos();

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
    getGithubInfo();

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAMstVAEAAAAAK1YZqW5btS4DtF9RbYfyzSih4Sc%3D5oI83JYwD1EStGZ7W7MBuM14YFDWnZizpyXXpIjMLRAaCWEeJf");
    myHeaders.append("Cookie", "guest_id=v1%3A163465117710369443; personalization_id=\"v1_HFfS8810LPDNKiyHMXxPxg==\"");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://api.twitter.com/2/users/by/username/_nickjmoss", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
})