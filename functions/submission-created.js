require("dotenv").config()
const fetch = require("node-fetch")

exports.handler = async event => {
  console.log(event)
  //   console.log(`Recieved a submission: ${email}`)
  //   var transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: "youremail@gmail.com",
  //       pass: "yourpassword",
  //     },
  //   })

  //   var mailOptions = {
  //     from: "youremail@gmail.com",
  //     to: "myfriend@yahoo.com",
  //     subject: "Sending Email using Node.js",
  //     text: "That was easy!",
  //   }

  //   function sendEmailAsync() {
  //     return new Promise((resolve, reject) => {
  //       transporter.sendMail(mailOptions, function(error, info) {
  //         if (error) {
  //           console.log(error)
  //         } else {
  //           console.log("Email sent: " + info.response)
  //         }
  //       })
  //     })
  //   }

  //   return sendEmailAsync()
  return Promise.resolve()
}
