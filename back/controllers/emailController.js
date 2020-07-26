const nodeMailer = require('nodemailer');


function sendCvEmail(req, res) {
  if (req.body) {
    let transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    let file = req.file;
    file.filename = req.file.originalname;

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
      html: htmlBody,
      attachments: [ file ]
    }

    transporter.sendMail(mail, function (err, info) {
      if (err){
        //ACA REDIRECCIONAR CUANDO HUBO UN ERROR
        return res.send(err);
      } 

      //ACA SE REDIRECCIONA CUANDO SE MANDO EL MAIL
      res.redirect("/enviado");
    })
  }
}

function sendInfoEmail(req, res) {
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
      <h3>Nueva Consulta</h3>
      <ul>
        <li>Nombre: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Mensaje: ${req.body.message}</li>
      </ul>
    `
    let mail = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Nueva Consulta",
      html: htmlBody
    }

    transporter.sendMail(mail, function (err, info) {
      if (err) return res.send(err);

      res.status(200).json({
        success: true,
        message: 'Email sent by test'
      });
    })
  }
}

module.exports = {
  sendCvEmail: sendCvEmail,
  sendInfoEmail: sendInfoEmail
}
