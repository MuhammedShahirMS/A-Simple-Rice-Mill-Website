

import sgMail from '@sendgrid/mail'

exports.handler = async function (event) {
  // Parse form data from the request body
  const { name, email, message } = JSON.parse(event.body);

  // Set SendGrid API Key from environment variable
  sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

  // Configure the email content
  const msg = {
    to: process.env.REACT_APP_RECIPIENT_EMAIL,  // recipient's email from env variable
    from: 'your_verified_email@example.com',  // verified sender email on SendGrid
    subject: `New message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    // Send the email
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: 'Failed to send email' }),
    };
  }
};
