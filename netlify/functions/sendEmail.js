

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


const errortraced = {
  code: 403,
  response: {
    headers: {
      server: 'nginx',
      date: 'Tue, 12 Nov 2024 01:50:24 GMT',
      'content-type': 'application/json',
      'content-length': '281',
      connection: 'close',
      'access-control-allow-origin': 'https://sendgrid.api-docs.io',
      'access-control-allow-methods': 'POST',
      'access-control-allow-headers': 'Authorization, Content-Type, On-behalf-of, x-sg-elas-acl',
      'access-control-max-age': '600',
      'x-no-cors-reason': 'https://sendgrid.com/docs/Classroom/Basics/API/cors.html',
      'strict-transport-security': 'max-age=600; includeSubDomains'
    },
    body: { errors: [Array] }
  }
}
