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

      var output = decoder.decode(linesSoFar);

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
    var output = decoder.decode(lineArray);

    console.log(output);
  });

}


