const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const axios = require('axios');

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);


const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    console.log('Received data:', req.body);
    // Validation
    if (!name || !email || !msg) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Send email using Nodemailer
    const mailOptions = {
      to: "vinaykumar247551@gmail.com", // Replace with the actual recipient email
      from: " ", // Replace with the actual sender email
      subject: "TEST",
      text: msg,
    };

    await transporter.sendMail(mailOptions);

    // Send data to the Sendinblue API
    const requestData = {
      sender: { email: '' },
      to: [{ email }],
      replyTo: { email: 'vinaykumar247551@gmail.com' },
      textContent: msg,
      subject: '',
    };

    const apiResponse = await axios.post(apiUrl, requestData, {
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Your message was sent successfully",
      apiResponse: apiResponse.data, // Include API response for reference if needed
    });
  } catch (error) {
    console.error('Error in sendEmailController:', error);
    return res.status(500).json({
      success: false,
      message: "Error sending email",
      error: error.message,
    });
  }
};

module.exports = { sendEmailController };
