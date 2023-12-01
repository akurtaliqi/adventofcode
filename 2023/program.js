var fs = require('fs');
var input = require('fs').createReadStream('./data/day_1.txt');

var promise = new Promise(function(resolve, reject) {
    var finalResult = 0;
    var lineReader = require('readline').createInterface({
        input: input
    });
    
    input.on('end', () => {
        resolve(finalResult);
    });
    
    lineReader.on('line', (line) => {
        var extractNumbers = line.replace(/\D/g, "");

        if (extractNumbers.length == 1) {
            finalResult = finalResult + Number(extractNumbers.concat('', extractNumbers));
        }
        
        if (extractNumbers.length == 2) {
            finalResult = finalResult + Number(extractNumbers);
        }

        if (extractNumbers.length > 2) {
            finalResult = finalResult + Number(
                extractNumbers.substring(0, 1).concat('', extractNumbers.substring(extractNumbers.length - 1))
            );
        }
  });
});

promise.then((resolveResult) => {
  console.log("Day 1 answer : ", resolveResult);
});