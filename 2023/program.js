var fs = require('fs');
var input = require('fs').createReadStream('./data/day_1.txt');

var promise = new Promise(function(resolve, reject) {
    var finalResult = 0;
  var lineReader = require('readline').createInterface({
    input: input
  });
  input.on('end', () => {
    resolve("I reached the end!");
  });

  lineReader.on('line', (line) => {
    // DO STH. WITH EACH LINE (IF DESIRED)
    //console.log(line);
    var thenum = line.replace(/\D/g, "");
    var toAdd;
    if (thenum.length == 1) {
        // finalResult = finalResult + thenum + thenum;
        toAdd = thenum.concat('', thenum);
        finalResult = finalResult + Number(toAdd);
    }
    if (thenum.length == 2) {
        finalResult = finalResult + Number(thenum);
    }
    if (thenum.length > 2) {
        finalResult = finalResult;
        let firstChar = thenum.substring(0, 1); 
        let lastChar = thenum.substring(thenum.length - 1); 
        toAdd = firstChar.concat('', lastChar);
        finalResult = finalResult + Number(toAdd);
    }
    // console.log(thenum);
    console.log("final result", finalResult);
  });
});

promise.then((resolveResult) => {
  // DO WHATEVER YOU WANT TO DO AFTER
  console.log(resolveResult);
});