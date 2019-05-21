const validator = require('validator');
const AWS = require('aws-sdk');
const axios = require('axios');

const ses = new AWS.SES();

exports.handler = async (event, context, callback) =>
{
  const headers = {
    'Access-Control-Allow-Origin': '*',
  };

  let body = event;
  if (event.body)
  {
    body = JSON.parse(event.body);
  }
  
  let name = body.name;
  let email = body.email;
  let message = body.message;
  let captchaToken = body.captchaToken;

  if (!name || !email || !message ||
      validator.isEmpty(name) || 
      validator.isEmpty(email) ||
      validator.isEmpty(message) ||
      !validator.isEmail(email))
  {
    const response = {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        message: 'Validation error!'
      })
    };
    return callback(null, response);
  }

  let captchaRes = await axios.post('https://www.google.com/recaptcha/api/siteverify', null,
  {
    params: {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: captchaToken
    }
  });

  if (!captchaRes.data.success)
  {
    const response = {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        message: 'Captcha verification failed!'
      })
    };
    return callback(null, response);
  }

  const emailParams = {
    Source: `${email} <josh.m.kay@gmail.com>`,
    Destination: {
      ToAddresses: ['me@joshkay.ca']
    },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: message
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: `joshkay.ca message from ${name}`
      }
    }
  };

  try {
    const emailData = await ses.sendEmail(emailParams).promise();

    const response = {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Message sent!'
      })
    };
    return callback(null, response);
  }
  catch (err)
  {
    const response = {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: err.message
      })
    };
    return callback(null, response);
  }
}