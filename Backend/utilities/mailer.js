
const nodemailer = require('nodemailer');
module.exports = sendmail = (otp,email) =>{
   
    

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'mahendarptl9@gmail.com',
    pass: 'aczzfqjzalssvkbo', 
  },
});


const mailOptions = {
  from: 'mahendarptl9@gmail.com', // Sender email address
  to: email, // Recipient email address (can be an array for multiple recipients)
  subject: 'otp to reset your password', // Email subject
  text: ` your otp is ${otp} Dont share it with anyone   `, // Plain text body
  // You can also use html: '<h1>Hello from Node.js</h1>' for HTML content
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
    return
  }
});


}