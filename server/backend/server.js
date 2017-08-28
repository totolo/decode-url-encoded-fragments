var express = require('express');
var router = express.Router();
var decoder = require("/Users/nenshu/Code/decode-url-encoded-fragments/server/domain/decodeUrlEncodedFragments");
var http = require('http');


router.post('/', function(req, res, next) {

  // by contract, incoming data with key "fragments"
  var input = JSON.parse(req.body.fragments);

  // connect encoded input into result string
  var encodedOutput = decoder.decode(input);

  // url decode result string
  var output = decodeURIComponent(encodedOutput.replace(/\+/g, ' '));

  // send decoded string back as response body
  res.status(200).send(JSON.stringify(output))

});

module.exports = router;

// Testing
setTimeout(function() {

  var post_data = JSON.stringify({fragments :
      ['l+window.%0A+++++',
    'gs%29+%7B%0A++++++++%2F',
    '%3B%0A++++%7D%0A%7D%0A',
    'ublic+static+vo',
    '++++++++System.',
    'd%22+to+the+termi',
    's+%22Hello%2C+World',
    '++%2F%2F+Prints+%22He',
    'Prints+%22Hello%2C+',
    'e+terminal+wind',
    'rld+%7B%0A++++publi',
    'm%0Apublic+class+',
    '+void+main%28Stri',
    'String%5B%5D+args%29+',
    'println%28%22Hello%2C',
    'e+program%0Apubli',
    '++System.out.pr',
    'o%2C+World%22%29%3B%0A+++',
    'o%2C+World%22+to+th',
    'ass+HelloWorld+',
    '%2F%2FSample+progra']});

// An object of options to indicate where to post to
  var post_options = {
    host: 'localhost',
    port: '3000',
    path: '/server',
    method: 'POST',
    data: post_data,
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json'
    }
  };

// Set up the request
  var post_req = http.request(post_options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('Response: ' + chunk);
    });
  });

// post the data
  post_req.write(post_data);
  post_req.end();
}, 2000)