import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const { GMAIL_USER, GMAIL_PASSWORD } = process.env;

// Create a transporter to send emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASSWORD
    }
});

// Define the email details
const mailOptions = {
    from: GMAIL_USER, // Sender's email address
    to: 'Enter email address here', // Recipient's email address
    subject: 'Your subject', // Email subject
    text: 'This is a test email.' // Email body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred while sending email:', error);
    } else {
        console.log('Email sent successfully! Response:', info.response);
    }
});
