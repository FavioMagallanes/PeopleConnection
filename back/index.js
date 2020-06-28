const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
require('dotenv').config()

app.use(express.static(path.join(__dirname, '../front/public')));
app.use(bodyParser.json());

//endpoint que manda el index html a la ruta raiz
app.get('/', function (req, res) {
  let pathHome = path.join(__dirname, "../front/public/index.html");
  res.sendFile(pathHome);
});

app.post('/enviar-datos', function (req, res) {
  console.log(req.body);
  if (req.body) {
    //Nodemailer
    let transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    let htmlBody = `
      <h3>Nuevo CV recibido</h3>
      <ul>
        <li>Nombre: ${req.body.name}</li>
        <li>Apellido: ${req.body.lastname}</li>
        <li>Email: ${req.body.email}</li>
        <li>Mensaje: ${req.body.message}</li>
      </ul>
    `
    let mail = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Nuevo CV Recibido !",
      html: htmlBody
    }

    transporter.sendMail(mail, function (err, info) {
      if (err) return res.send(err);

      res.status(200).json({
        message: 'Email sent by test'
      });
    })
  }
})


app.listen(3000, () => {
  console.log('Server on port 3000');
});