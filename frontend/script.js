function init() {
    const navUl = document.querySelector("nav ul")

    //pegar o usuario do sessionStorage e converter para objeto 
    const user =  JSON.parse(sessionStorage.getItem("user"))

    //user.id = recupera o id do usuario
    //user.name = recupera o nome do usuario

    //verifica se existe um usuario logado e mostra o nome na tela e o botao de sair
    if (user) {
        navUl.innerHTML += `
            <li><h2> Usuário: ${user.name} </h2></li>
            <li>
                <a href="./pages/jogar.html">Jogar</a>
            </li>
            <li><button>Sair</button></li>
        `
        return
    }

    //so vai apararecer quando o usuario nao estiver logado
    navUl.innerHTML += `
        <li>
            <a href="./pages/login.html">Login</a>
        </li>
    `
}

init()