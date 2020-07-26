const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const emailController = require('./controllers/emailController');
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads/' });

require('dotenv').config()

app.use(express.static(path.join(__dirname, '../front/public')));
app.use(bodyParser.json());

//endpoint que manda el index html a la ruta raiz
app.get('/', function (req, res) {
  let pathHome = path.join(__dirname, "../front/public/index.html");
  res.sendFile(pathHome);
});

app.get('/cv-form', function (req, res) {
  let pathHome = path.join(__dirname, "../front/public/cv-form.html");
  res.sendFile(pathHome);
});

app.get('/email-enviado', function (req, res) {
  let pathHome = path.join(__dirname, "../front/public/index.html");
  res.sendFile(pathHome);
});

app.get('/error-al-enviar', function (req, res) {
  let pathHome = path.join(__dirname, "../front/public/index.html");
  res.sendFile(pathHome);
});

app.get('/enviado', function (req, res) {
  let pathHome = path.join(__dirname, "../front/public/msgEnviado.html");
  res.sendFile(pathHome);
});

app.post('/enviar-datos', upload.single('cv-file'), emailController.sendCvEmail);
app.post('/enviar-consulta', emailController.sendInfoEmail)

app.listen(3000, () => {
  console.log('Server on port 3000');
});