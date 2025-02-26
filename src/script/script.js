const listaDeContatos = [
    {
        id: 1,
        nome: "João",
        ultimaMensagem: "Olá, tudo bem?",
        horarioUltimaMensagem: "15:30",
        avatar: "src/assets/images/Avatar00.png",
        conversas: [
            { mensagem: "Oi, eu sou programador!", tipo: "recebida", horario: "10:30" },
            { mensagem: "Que legal eu também sou!", tipo: "enviada", horario: "10:31" },
            { mensagem: "Vamos codar juntos?", tipo: "recebida", horario: "10:33" }
        ]
    },
    {
        id: 2,
        nome: "Mario",
        ultimaMensagem: "Qual era o codigo?",
        horarioUltimaMensagem: "15:30",
        avatar: "src/assets/images/Avatar00.png",
        conversas: [
            { mensagem: "Ola, boa tarde, ainda esta precisando de programador", tipo: "recebida", horario: "15:30" },
            { mensagem: "Sim, estou!", tipo: "enviada", horario: "15:31" },
            { mensagem: "ok. vou te enviar um proposta", tipo: "recebida", horario: "15:31" }
        ]
    },
    {
        id: 3,
        nome: "Maria",
        ultimaMensagem: "Olá, o projeto, está pronto?",
        horarioUltimaMensagem: "15:30",
        avatar: "src/assets/images/Avatar00.png",
        conversas: [
            { mensagem: "oi, tudo bem?", tipo: "recebida", horario: "08:30" },
            { mensagem: "sim, estou", tipo: "enviada", horario: "08:35" },
            { mensagem: "quer ir na praia?", tipo: "recebida", horario: "08:39" }
        ]
    },
    {
        id: 4,
        nome: "Carla",
        ultimaMensagem: "Tem café",
        horarioUltimaMensagem: "15:30",
        avatar: "src/assets/images/Avatar00.png",
        conversas: [
            { mensagem: "ola, como estão as coisas por ai?", tipo: "recebida", horario: "15:30" },
            { mensagem: "Esta tudo bem, quer vir aqui em casa?", tipo: "enviada", horario: "15:31" },
            { mensagem: "Tem café ai?", tipo: "recebida", horario: "15:31" }
        ]
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
            const mensagemRenderizada = renderizarMensagem("enviada", texto, "21:11");
            listaMensagens.appendChild(mensagemRenderizada);
            inputMsg.value = "";

            setTimeout(responderMensagem, 2000);
        }
    }

    function responderMensagem() {
        const posicao = Math.floor(Math.random() * respostasParaOBot.length);
        const mensagemDoBot = respostasParaOBot[posicao];
        const mensagemRenderizada = renderizarMensagem("recebida", mensagemDoBot, "21:21");
        listaMensagens.appendChild(mensagemRenderizada);
    }

    

    buttonSend.addEventListener("click", () => {
        enviarMensagem();
    });

    inputMsg.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            enviarMensagem();
        }
    });

    function renderizarMensagem(tipo, mensagem, horario) {
        const divMensagem = document.createElement("div");
        const direcao = tipo === "enviada" ? "end" : "start";
        const styleDiv = tipo === "enviada" ? "you" : "other";

        divMensagem.classList.add("flex", "flex--direction--row", `justify--content--${direcao}`, "width--100", "fade-in");

        divMensagem.innerHTML = `
                <div class="flex flex--direction--column message ${styleDiv}">
                    <div class="flex--6">
                        ${mensagem}
                    </div>
                    <div class="flex--1 flex flex--direction--row justify--content--end align--items--center font--size--12 infos--message">
                        <img src="src/assets/icons/heart.svg" alt="">
                        <div>${horario}</div>
                        <img src="src/assets/icons/viewed.svg" alt="">
                    </div>                                    
                </div>
        `;
        return divMensagem;
    }

    function carregarMensagemContato(index ) {
        const contato = listaDeContatos[index];
        listaMensagens.innerHTML = "";

        contato.conversas.forEach((conversa) => {
            const mensagemRenderizada = renderizarMensagem(conversa.tipo, conversa.mensagem, conversa.horario);
            listaMensagens.appendChild(mensagemRenderizada);
        });
    }

    function carregarContatos() {
        const divContatosElement = document.querySelector(".div--contacts");        

        listaDeContatos.forEach((contato, index) => {
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
                divParentElement.addEventListener("click", () => {
                    carregarMensagemContato(index);
                });
                
                divContatosElement.appendChild(divParentElement);
        });
    }
    setTimeout(() => {
        carregarContatos();
    }, 2500);
    
});
