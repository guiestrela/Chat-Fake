document.addEventListener("DOMContentLoaded", () => {
    console.log("minha pagina carregou!");

    const inputMsg = document.querySelector("#inputMensagem");
    console.log(inputMsg);

    inputMsg.placeholder = "Please enter your message";

    const buttons = document.querySelectorAll(".cursor--pointer");
    console.log(buttons);

    const buttonSend = document.querySelector(".cursor--pointer[src*='send']");
    console.log(buttonSend);

    const listaMensagens = document.querySelector(".div--messages");
    console.log(listaMensagens);

    //buttonSend.classList.add("minha-classe-modulo-um");

    const respostasParaOBot = [
        "Olá, tudo bem?",
        "Como você está?",
        "O que você deseja?",
        "Qual é o seu nome?",
        "O meu nome é Bot",
        "Eu faço parte do time de desenvolvimento",
        "Você quer conversar sobre o que?",
        "Qual é a sua idade?",
        "O que você faz da vida?",
    ];

    function enviarMensagem() {
        const texto = inputMsg.value.trim();
        
        if (texto === "") {
            alert("Please enter a message");
        } else {
            adicionarMenssagem("enviada", texto);

            setTimeout(responderMensagem, 2000);
        }
    }

    function responderMensagem() {
        const posicao = Math.floor(Math.random() * respostasParaOBot.length);
        const mensagemDoBot = respostasParaOBot[posicao];
        adicionarMenssagem("recebida", mensagemDoBot);
    }

    function adicionarMenssagem(tipoMensan, texto) {
        const mensagemElement = document.createElement("div");

        mensagemElement.classList.add("message");

        if (tipoMensan === 'enviada') {
            mensagemElement.classList.add("you");
        } else {
            mensagemElement.classList.add("other");
        }

        mensagemElement.innerText = texto;

        listaMensagens.appendChild(mensagemElement);
    } 

    buttonSend.addEventListener("click", () => {
        enviarMensagem();
    });

    inputMsg.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            enviarMensagem();
        }
    });
});
