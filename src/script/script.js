document.addEventListener("DOMContentLoaded", () => {
    console.log("minha pagina carregou!");

    const inputMsg = document.querySelector("#inputMensagem");
    console.log(inputMsg);

    inputMsg.placeholder = "Please enter your message";

    const buttons = document.querySelectorAll(".cursor--pointer");
    console.log(buttons);

    const buttonSend = document.querySelector(".cursor--pointer[src*='send']");
    console.log(buttonSend);

    //buttonSend.classList.add("minha-classe-modulo-um");

    function sendAlert() {
        const texto = inputMsg.value.trim();
        
        if (texto === "") {
            alert("Please enter a message");
        } else {
            alert(`Your message is: ${texto}`);
        }
    }

    buttonSend.addEventListener("click", () => {
        sendAlert();
    });

    inputMsg.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendAlert();
        }
    });
});
