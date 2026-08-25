
let botao = document.getElementById("botao");

botao.addEventListener("click", clicar);
botao.addEventListener("mouseenter", entrar);
botao.addEventListener("mouseout", sair);

function clicar(event) {
    event.preventDefault();
    botao.innerText = "Clicou!!!";
    botao.style.background = "#000000";

    setTimeout(function () {
        window.open(botao.href, "_blank");
    }, 300);
}

function entrar() {
    botao.innerText = "AQUI!!!";
    botao.style.background = "#000000";
}

function sair() {
    botao.innerText = "Clique aqui!";
    botao.style.background = "#000000";
}

