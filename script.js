document.addEventListener("DOMContentLoaded", function () {

    const formLogin = document.getElementById("formLogin");

    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const senha = document.getElementById("senha").value;

        if (usuario === "Anonimo@gmail.com" && senha === "V9@qL#72mZ!xP$4wR&8nT^5kB*3fH6@y") {

            window.location.href = "menu.html";

        } else {

            window.location.href = "erro.html";

        }

    });

});