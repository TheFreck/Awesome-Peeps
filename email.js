var mailgun = require("mailgun-js");
var api_key = '060550c6-c75b081c';
var DOMAIN = 'sandbox54048e8468064a8a9659a3bd8ab1aa7a.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'wpicaco@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});