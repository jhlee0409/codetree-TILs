const fs = require("fs");

let input = +fs.readFileSync(0).toString().trim()

let result = 0;

while(input <= 1000) {
    if(input % 2 === 0) {
        input = input * 3 + 1
    } else {
        input = input * 2 + 2
    }
    result++;
}

console.log(result)