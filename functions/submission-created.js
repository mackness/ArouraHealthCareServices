var nodemailer = require("nodemailer")

exports.handler = function(event, context, callback) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "youremail@gmail.com",
      pass: "yourpassword",
    },
  })

  var mailOptions = {
    from: "macksol@gmail.com",
    to: "myfriend@yahoo.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      callback({
        status: "failed",
        code: 200,
      })
      console.log(error)
    } else {
      callback({
        status: "success",
        code: 200,
      })
      console.log("Email sent: " + info.response)
    }
  })
}
