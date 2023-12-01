var fs = require('fs');
var input = require('fs').createReadStream('./data/day_1.txt');
const tabStringNumbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
]
function isNumeric(str){
    return !isNaN(str - parseFloat(str));
}
function searchStringInArray (str, strArray) {
    /*for (var j=0; j<strArray.length; j++) {
        if (strArray[j].match(str)) return j;
    }
    return -1;*/
    strArray.();
}
var promise = new Promise(function(resolve, reject) {
    var finalResult = 0;
    var lineReader = require('readline').createInterface({
        input: input
    });
    
    input.on('end', () => {
        resolve(finalResult);
    });
    
    lineReader.on('line', (line) => {
        // var extractNumbers = line.replace(/\D/g, "");
        var firstChar = line.substring(0, 1);
        var lastChar = line.substring(line.length - 1);
        

        if (isNumeric(firstChar) && isNumeric(lastChar)) {
            var toAdd = firstChar.concat('', lastChar);
            finalResult = finalResult + Number(toAdd);
        }

        console.log("yes or no", searchStringInArray(line, tabStringNumbers))

        if ((isNumeric(firstChar) && !isNumeric(lastChar)) && tabStringNumbers.includes(line)) {
            console.log(line)
            let testLastIndex = line.lastIndexOf(tabStringNumbers.includes(line));
            console.log(testLastIndex);

        }

        // console.log("yes", isNumeric(firstChar));

        // check 1 : isFirst OR last digit ? 
        // if yes -> take first or last digit as truth
        // else check if line contains one of tabStringNumbers
        // if yes then seperate them -> then take first and last and Number(first) Number(last)
        
  });
});

promise.then((resolveResult) => {
  console.log("Day 1 answer : ", resolveResult);
});