var mailgun = require("mailgun-js");
var api_key = '060550c6-c75b081c';
var DOMAIN = "greedy-bastages.herokuapp.com/";
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: "bar@example.com, YOU@YOUR_DOMAIN_NAME",
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
  if(error) throw error;
  console.log(body);
});