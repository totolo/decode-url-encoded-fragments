
module.exports = {
  decode: function(strArr) {

    var singleURLString = '';
    var lastLine = '';
    for (var i = 0; i < strArr; i++) {
      if (decodeURIComponent(strArr[i]).length < 15) {
        lastLine = strArr[i];
        strArr.splice(i, 1);
      }
    }
    for (var j = 0; j < strArr.length; i++) {
      var remainingStrArrs = strArr.filter(function(value) {
        return value != strArr[i];
      });
      if (getValidSingleString(strArr[i], remainingStrArrs) != '') {
        singleURLString = getValidSingleString(strArr[i], remainingStrArrs);
        break;
      }
    }
    if (singleURLString == '') {
      return lastLine;
    }
    if (lastLine != '') {
      var resultArr = getCommonCount(singleURLString, lastLine);
      if (resultArr[0]) {
        return concatStrs(singleURLString, lastLine, resultArr[1]).replace(/\+/g, ' ');
      } else {
        return '';
      }
    }
    return decodeURIComponent(singleURLString.replace(/\+/g, ' '));
  }
};

// Helper function
function getValidSingleString(startStr, remainingStrArrs) {
  if (!remainingStrArrs.length) {
    return startStr;
  }

  var candidateStrs = [];
  for (var i = 0; i < remainingStrArrs.length; i++) {

    var resultArr = getCommonCount(startStr, remainingStrArrs[i]);
    if (resultArr[0]) {
      var newStartStr = concatStrs(startStr, remainingStrArrs[i], resultArr[1]);
      var newRemainingStrArrs = remainingStrArrs.filter(function(value) {
        return value != remainingStrArrs[i];
      });
      candidateStrs.push(getValidSingleString(newStartStr, newRemainingStrArrs));
    }
  }
  if (!candidateStrs.length) {
    return '';
  }
  for (var j = 0; j < candidateStrs.length; j++) {
    if (candidateStrs[j] != '') {
      return candidateStrs[j];
    }
  }
  return '';
}

// Helper function
// If str1 and str2 have more than 3 (including 3) overlapping characters, and str2 is a legitimate subsequent string of str1,
// return an array of two elements, with the first element being true, the second element being the number of common characters.
function getCommonCount(str1, str2) {

  var len = str1.length;
  var lastThreeChars = str1.substr(len-3, 3);
  var indexStr1 = len - 3;
  var indexStr2 = str2.indexOf(lastThreeChars);
  var resultArr = [];

  if(indexStr2 != -1) {
    while(indexStr2 >= 0) {
      if (str1[indexStr1] == str2[indexStr2]) {
        indexStr1--;
        indexStr2--;
      } else {
        break;
      }
    }
    if (indexStr2 < 0) {
      resultArr.push(true, len - indexStr1 - 1);
    } else {
      resultArr.push(false, 0);
    }
  } else {
    resultArr.push(false, 0);
  }
  return resultArr;
}

// Helper function
// return a concatenated string with the overlapping characters removed.

function concatStrs(str1, str2, commonCount) {
  return str1 + str2.substring(commonCount);
}

var input1 = [
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
];

var input2 = [
  'l+window.%0A+++++',
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
  '%2F%2FSample+progra'
];

var testInput = [
  'l+window.%0A+++++',
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
  '+System.out.pri',
  'o%2C+World%22%29%3B%0A+++',
  'o%2C+World%22+to+th',
  'ass+HelloWorld+',
];

console.log(module.exports.decode(input1));
