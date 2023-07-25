function getProjects() {
    const urlGitHub = 'https://api.github.com/users/Lucas-Nascim/repos'
    var loadingElement = document.getElementById('loading')

    fetch(urlGitHub, {
        method: 'GET' //pegar os projetos no GitHub
    })
        .then ((response) => response.json())
        .then((response) => {
            loadingElement.style.display = 'none'
            console.log(response)
            showProjects(response)
        })
        .catch((e) => { //se der erro
            console.log(e)
        })
}

function showProjects(data) { //mostrar projetos do repositorio do GitHub
    var listElement = document.getElementById('my-projects-list')

    for(let i = 0; i < data.length; i++)
    {
        let a = document.createElement("a")
        a.href = data[i]['clone_url'] //pegar o url do projeto
        a.target = '_blank'
        a.title = data[i]['description'] // Mostra descrição do projeto
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    }
}
getProjects()