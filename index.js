console.log('i am working');

function getGithubRepos(userName) {
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then((response) => {
        console.log(response)
        return response.json();
    })
    .then((myJSON) => {
        displayResults(myJSON);
    })
    .catch((error) => {
        console.log(error);
        alert('Something when wrong. Try again later.');
    })
}

function displayResults(myJSON) {
    console.log(myJSON);
    $('.display-repos').html(`<h2>List of Repos</h2>`);
    for (let i = 0; i < myJSON.length; i++) {
        $('.display-repos').append(`<p><a href="${myJSON[i].svn_url}">${myJSON[i].name}</a></p>`);
    }
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let repoList = $('#repos').val();
        console.log(repoList);
        getGithubRepos(repoList);
    });
}

watchForm();