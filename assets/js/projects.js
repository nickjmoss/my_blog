document.addEventListener("DOMContentLoaded", function () {    
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
});