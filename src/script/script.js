document.addEventListener("DOMContentLoaded", () => {
    console.log("minha pagina carregou!");

    const inputMsg = document.querySelector("#inputMensagem");
    console.log(inputMsg);

    inputMsg.ariaPlaceholder = "Digite sua mensagem aqui";

    const buttons = document.querySelectorAll(".cursor--pointer");
    console.log(buttons);

    const buttonSend = document.querySelector(".cursor--pointer[src*='send']");
    console.log(buttonSend);

    buttonSend.classList.add("minha-classe-modulo-um");
})



