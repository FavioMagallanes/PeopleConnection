const inputName = document.getElementById("input-name");
const inputtEmail = document.getElementById("input-email");
const form = document.getElementById("contact-form");
const inputMessage = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let contactoInfo = {
        name: inputName.value,
        email: inputtEmail.value,
        message: inputMessage.value,
    }

    enviarDatos(contactoInfo);
})

function enviarDatos(contactInfo) {
    let xml = new XMLHttpRequest;

    xml.onload = function () {
        let response = JSON.parse(xml.responseText);
        if (response.success) {
            alert("Tu consulta fue enviada correctamente", "Mensaje enviado");
        }
    }

    xml.open("POST", "/enviar-consulta", true);
    xml.setRequestHeader('Content-Type', 'application/json');
    xml.send(JSON.stringify(contactInfo));

}