const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    const nome = document.getElementById("nomes").value;
    const email = document.getElementById("emails").value;
   const idAde = document.getElementById("idAde").value;

    const erro = document.getElementById("erro");

    erro.textContent = "";

    if (nome.trim() === "") {
        event.preventDefault();
        erro.textContent = "O nome não pode estar vazio.";
        return;
    }

    if (!email.includes("@")) {
        event.preventDefault();
        erro.textContent = "Email inválido.";
        return;
    }

    if (idade <= 0) {
        event.preventDefault();
        erro.textContent = "A idade deve ser maior que zero.";
        return;
    }

});