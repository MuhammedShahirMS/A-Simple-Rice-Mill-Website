

import sgMail from '@sendgrid/mail'

exports.handler = async function (event) {
  const { name, email, message } = JSON.parse(event.body);

  console.log('The msg we talk about is',  {
    to: process.env.REACT_APP_RECEIPENT_EMAIL,
    replyTo : email,
    from: process.env.REACT_APP_SENDER_EMAIL,
    subject: `New message from ${name}`,
    text: message
  }
  );
  

  sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

  // Configure the email content
  const msg = {
    to: process.env.REACT_APP_RECEIPENT_EMAIL,
    replyTo : email,
    from: process.env.REACT_APP_SENDER_EMAIL,
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
    console.error('Error sending email catched :', error?.response?.body?.errors?.map(item => JSON.stringify(item)));
    
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: 'Failed to send email' }),
    };
  }
};

