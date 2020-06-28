const inputName = document.getElementById("input-name");
const inputLlastname = document.getElementById("input-lastname");
const inputtEmail = document.getElementById("input-email");
const inputtCvfile = document.getElementById("input-cvfile");
const form = document.getElementById("cv-form");
const inputMessage = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let postulante = {
    name: inputName.value,
    lastname: inputLlastname.value,
    email: inputtEmail.value,
    message: inputMessage.value,
  }
  enviarDatos(postulante);
})

function enviarDatos(postulanteInfo) {
  let xml = new XMLHttpRequest;

  xml.onload = function () {
    let reponse = JSON.parse(xml.responseText);
    console.log(response);
  }

  xml.open("POST", "/enviar-datos", true);
  xml.setRequestHeader('Content-Type', 'application/json');
  xml.send(JSON.stringify(postulanteInfo));

}