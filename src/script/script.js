const listaDeContatos = [
    {
        id: 1,
        nome: "João",
        ultimaMensagem: "Olá, tudo bem?",
        horarioUltimaMensagem: "15:30",
        avatar: "src/assets/images/Avatar00.png"
    },
    {
        id: 2,
        nome: "Mario",
        ultimaMensagem: "Qual era o codigo?",
        horarioUltimaMensagem: "15:30",
        avatar: "src/assets/images/Avatar00.png"
    },
    {
        id: 3,
        nome: "Maria",
        ultimaMensagem: "Olá, o projeto, está pronto?",
        horarioUltimaMensagem: "15:30",
        avatar: "src/assets/images/Avatar00.png"
    },
    {
        id: 4,
        nome: "Carla",
        ultimaMensagem: "Tem café",
        horarioUltimaMensagem: "15:30",
        avatar: "src/assets/images/Avatar00.png"
    }
];

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
            inputMsg.value = "";

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

        mensagemElement.classList.add("message", "fade-in");

        if (tipoMensan === 'enviada') {
            mensagemElement.classList.add("you");
        } else {
            mensagemElement.classList.add("other");
        }

        mensagemElement.innerText = texto;

        listaMensagens.appendChild(mensagemElement);

        setTimeout(() => {
            mensagemElement.classList.remove("fade-in");
        }, 500);
    } 

    buttonSend.addEventListener("click", () => {
        enviarMensagem();
    });

    inputMsg.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            enviarMensagem();
        }
    });

    function carregarContatos() {
        const divContatosElement = document.querySelector(".div--contacts");

        

        listaDeContatos.forEach((contato) => {
            console.log(contato);            
            const divParentElement = document.createElement("div");
            divParentElement.classList.add("flex", "area--contact", "fade-in");

            divParentElement.innerHTML = `
                    <div class="flex justify--content--center align--items--center flex--1">
                        <img class="avatar--left--bar" src="${contato.avatar}" alt="">
                    </div>

                    <div class="flex flex--direction--column justify--content--center flex--3">
                        <div>
                            <div class="flex align--items--center infos--contact">    
                            <div class="font--family font--weight--bold">${contato.nome}</div>
                            <img src="src/assets/icons/verified.svg" alt="">
                            </div>  
                            
                            <div class="last--message">${contato.ultimaMensagem}
                            </div>
                        </div>
                    </div>

                    <div class="flex flex--direction--column justify--content--center align--items--end flex--1 div--last--messages--info">
                        <div class="hour--last--message">
                            ${contato.horarioUltimaMensagem}
                        </div>
                        <div class="flex justify--content--center align--items--center quantity--last--viewed--messages background--green">
                            1
                        </div>
                    </div>
                `;

                
                divContatosElement.appendChild(divParentElement);
        });
    }
    setTimeout(() => {
        carregarContatos();
    }, 2500);
    
});
