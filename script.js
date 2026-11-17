
document.addEventListener("DOMContentLoaded", function () {

    const formLogin = document.getElementById("formLogin");

    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const senha = document.getElementById("senha").value;
        const mensagemErro = document.getElementById("mensagemErro");

        if (usuario === "Anonimo@gmail.com" && senha === "luisfernandospoljaric") {
            window.location.href = "menu.html";
        } else {
            mensagemErro.textContent = "Usuário ou senha incorretos. Tente novamente!";
        }
    });

});
