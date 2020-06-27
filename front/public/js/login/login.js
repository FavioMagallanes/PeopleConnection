//Capturar los elemntos html del form login

const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  login(email.value, password.value);
})

function login(email, password) {
  let formData = {
    email: email,
    password: password,

  }

  let xmlhttp = new XMLHttpRequest();

  xmlhttp.addEventListener("load", function () {
    if (this.status === 200) {
      let response = JSON.parse(xmlhttp.responseText);
    }
  });

  xmlhttp.open('POST', '/login', true);
  xmlhttp.setRequestHeader('Content-Type', 'application/json');
  xmlhttp.send(JSON.stringify(formData));
}





