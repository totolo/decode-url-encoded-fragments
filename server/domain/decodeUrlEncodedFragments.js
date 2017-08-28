// ["l+window.%0A+++++",
//   "gs%29+%7B%0A++++++++%2F",
//   "%3B%0A++++%7D%0A%7D%0A",
//   "ublic+static+vo",
//   "++++++++System.",
//   "d%22+to+the+termi",
//   "s+%22Hello%2C+World",
//   "++%2F%2F+Prints+%22He",
//   "Prints+%22Hello%2C+",
//   "e+terminal+wind",
//   "rld+%7B%0A++++publi",
//   "m%0Apublic+class+",
//   "+void+main%28Stri",
//   "String%5B%5D+args%29+",
//   "println%28%22Hello%2C",
//   "e+program%0Apubli",
//   "++System.out.pr",
//   "o%2C+World%22%29%3B%0A+++",
//   "o%2C+World%22+to+th",
//   "ass+HelloWorld+",
//   "%2F%2FSample+progra"]

module.exports = {
  decode: function(strArr) {

    if (!Array.isArray(strArr) || !strArr.length) {
      return '';
    }
    if (strArr.length === 1) {
      return decodeURIComponent(strArr[0]);
    }
    var len = strArr.length;
    for (var i = 0; i < len; i++) {
      var candidateStr = [];
      var subStr = strArr[i].substr(len-3, 3);
      for (var j = 0; j < len; j++) {
        if (i != j) {
          if (strArr[j].indexOf(substr) != -1) {
            candidateStr.push(strarr[j]);
          }
        }
      }
      for (var k = 0; k < candidateStr.length; k++) {
        var indexK = candidateStr[k].indexOf(subStr);
        var indexI = len - 3;
        while(indexK >= 0) {
          if (candidateStr[k][indexK] == candidateStr[i][indexI]) {
            indexK--;
            indexI--;
          } else {
            break;
          }
        }
        if (indexK < 0) {
          var nextStr = candidateStr[k];
        }
      }
    }
  }
}

function checkValidBeginStr3(startStr, remainingStrArrs) {
  if (!remainingStrArrs.length) {
    return startStr;
  }
  var len = startStr.length;
  var lastThreeChars = startStr.substr(len-3, 3);
  var indexStartStr = len - 3;
  var candidateStrs = [];
  for (var i = 0; i < remainingStrArrs.length; i++) {
    var indexI = remainingStrArrs[i].indexOf(lastThreeChars);
    if (indexI != -1) {
      while(indexI >= 0) {
        if (startStr[indexStartStr] == remainingStrArrs[i][indexI]) {
          indexI--;
          indexStartStr--;
        } else {
          break;
        }
      }
      if (indexI < 0) {
        var newStartStr = startStr + remainingStrArrs[i].substring(len-indexStartStr-1);
        var newRemainingStrArrs = remainingStrArrs.filter(function(value, index) {
          return value != remainingStrArrs[i];
        });
        candidateStrs.push(checkValidBeginStr3(newStartStr, newRemainingStrArrs));
        //console.log(newStartStr);
      }
    }
    indexStartStr = len - 3;
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

function getSingleURLString(strArr) {
  var singleURLString = '';
  var lastLine = '';
  for (var i = 0; i < strArr; i++) {
    if (decodeURIComponent(strArr[i]).length < 15) {
      lastLine = strArr[i];
      strArr.splice(i, 1);
    }
  }
  for (var j = 0; j < strArr.length; i++) {
    var remainingStrArrs = strArr.filter(function(value, index) {
      return value != strArr[i];
    })
    if (checkValidBeginStr3(strArr[i], remainingStrArrs) != '') {
      singleURLString = checkValidBeginStr3(strArr[i], remainingStrArrs);
      break;
    }
  }
  if (lastLine != '') {
    var len = strArr.length

  }
};

var input1 = [
  '%2F%2FSample+progra',
  'e+program%0Apubli',
  'm%0Apublic+class+',
  'ass+HelloWorld+',
  'rld+%7B%0A++++publi',
  'ublic+static+vo',
  '+void+main%28Stri',
  'String%5B%5D+args%29+',
  'gs%29+%7B%0A++++++++%2F',
  '++%2F%2F+Prints+%22He',
  'Prints+%22Hello%2C+',
  's+%22Hello%2C+World',
  'o%2C+World%22+to+th',
  'd%22+to+the+termi',
  'e+terminal+wind',
  'l+window.%0A+++++',
  '++++++++System.',
  '++System.out.pr',
  'println%28%22Hello%2C',
  'o%2C+World%22%29%3B%0A+++',
  '%3B%0A++++%7D%0A%7D%0A',
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

var startStr = '%2F%2FSample+progra';
var testArr = ['%2F%2FSample+progra'];
testArr.splice(0, 1);
console.log(testArr);
var newArr = testArr.filter(function(value, index) {
  return value != startStr;
});