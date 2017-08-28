var express = require('express');
var router = express.Router();
var decoder = require("/Users/nenshu/Code/decode-url-encoded-fragments/server/domain/decodeUrlEncodedFragments");
var http = require('http');


router.post('/', function(req, res, next) {

  console.log("QQQQ", req.body.fragments);
  // by contract, incoming data with key "fragments"
  var input = req.body.fragments;

  // connect encoded input into result string
  var encodedOutput = decoder.decode(input);

  // var encodedOutput = '%2F%2FSample+program%0Apublic+class+HelloWorld+%7B%0A++++public+static+void+main%28String%5B%5D+args%29+%7B%0A++++++++%2F%2F+Prints+%22Hello%2C+World%22+to+the+terminal+window.%0A++++++++++System.out.println%28%22Hello%2C+World%22%29%3B%0A++++%7D%0A%7D%0A';

  // url decode result string
  var output = decodeURIComponent(encodedOutput.replace(/\+/g, ' '));

  // send decoded string back as response body
  res.status(200).send(JSON.stringify(output))

});

module.exports = router;

// Testing
setTimeout(function() {

  var post_data = JSON.stringify(
      {fragments: ['%2F%2F+Sample+progr',
        'program%0Apublic+',
        'ublic+class+Hel',
        'lass+HelloWorld',
        'elloWorld+%7B%0A+++',
        'd+%7B%0A++++public+',
        'public+static+v',
        'c+static+void+m',
        'id+main%28String%5B',
        '%28String%5B%5D+args%29',
        'args%29+%7B%0A+++++++',
        '++++++%2F%2F+Prints',
        '%2F%2F+Prints+%22Hell',
        'ts+%22Hello%2C+Worl',
        '%2C+World%22+to+the',
        '%22+to+the+termin',
        'rminal+window.%0A',
        'ow.%0A++++++++Sys',
        '+++++++System.o',
        'stem.out.printl',
        'intln%28%22Hello%2C+W',
        'o%2C+World%22%29%3B%0A+++',
        'rld%22%29%3B%0A++++%7D%0A%7D%0A',
        '%3B%0A++++%7D%0A%7D%0A']}
    );

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