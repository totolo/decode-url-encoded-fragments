var express = require('express');
var router = express.Router();
var decoder = require("/Users/nenshu/Code/decode-url-encoded-fragments/server/domain/decodeUrlEncodedFragments");
var http = require('http');


router.post('/', function(req, res, next) {

  console.log("QQQQ", req.body.fragments);
  // by contract, incoming data with key "fragments"
  var input = req.body.fragments;

  // url decode result string
  var output = decoder.decode(input);

  // send decoded string back as response body
  res.status(200).send(JSON.stringify(output))

});

module.exports = router;

// Testing
setTimeout(function() {

  var post_data = JSON.stringify(
      {fragments: [
        "%2F%2FSample+progra",
        "e+program%0Apubli",
        "m%0Apublic+class+",
        "ass+HelloWorld+",
        "rld+%7B%0A++++publi",
        "ublic+static+vo",
        "+void+main%28Stri",
        "String%5B%5D+args%29+",
        "gs%29+%7B%0A++++++++%2F",
        "++%2F%2F+Prints+%22He",
        "Prints+%22Hello%2C+",
        "s+%22Hello%2C+World",
        "o%2C+World%22+to+th",
        "d%22+to+the+termi",
        "e+terminal+wind",
        "l+window.%0A+++++",
        "++++++++System.",
        "+System.out.pri",
        "println%28%22Hello%2C",
        "o%2C+World%22%29%3B%0A+++",
        "%3B%0A++++%7D%0A%7D%0A"
      ]}
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