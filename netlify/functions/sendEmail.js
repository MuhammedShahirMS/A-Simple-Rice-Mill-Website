

import sgMail from '@sendgrid/mail'

exports.handler = async function (event) {
  const { name, email, message } = JSON.parse(event.body);

  sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

  // Configure the email content
  const msg = {
    to: process.env.REACT_APP_RECIPIENT_EMAIL,
    from: email,  // verified sender email on SendGrid
    subject: `New message from ${name}`,
    text: message
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
