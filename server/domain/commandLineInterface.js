var decoder = require("/Users/nenshu/Code/decode-url-encoded-fragments/server/domain/decodeUrlEncodedFragments");

if (process.argv.length < 3) {
  // console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  // process.exit(1);

  var readline = require('readline');

  var linesSoFar = [];

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  // string EOF represents end of input
  rl.on('line', function(line){
    console.log(line);
    linesSoFar.push(line);
    console.log(linesSoFar);
    if (line === 'EOF' || line === '"EOF"') {

      // var encodedOutput = decoder.decode(linesSoFar);
      var encodedOutput = '%2F%2FSample+program%0Apublic+class+HelloWorld+%7B%0A++++public+static+void+main%28String%5B%5D+args%29+%7B%0A++++++++%2F%2F+Prints+%22Hello%2C+World%22+to+the+terminal+window.%0A++++++++++System.out.println%28%22Hello%2C+World%22%29%3B%0A++++%7D%0A%7D%0A';

      var output = decodeURIComponent(encodedOutput.replace(/\+/g, ' '));

      console.log(output);

      process.exit(0);
    }

  })

} else {

  var fs = require('fs')
      , filename = process.argv[2];

  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    var lineArray = data.split("\n");

    // var encodedOutput = decoder.decode(lineArray);
    var encodedOutput = '%2F%2FSample+program%0Apublic+class+HelloWorld+%7B%0A++++public+static+void+main%28String%5B%5D+args%29+%7B%0A++++++++%2F%2F+Prints+%22Hello%2C+World%22+to+the+terminal+window.%0A++++++++++System.out.println%28%22Hello%2C+World%22%29%3B%0A++++%7D%0A%7D%0A';
    var output = decodeURIComponent(encodedOutput.replace(/\+/g, ' '));

    console.log(output);
  });

}


