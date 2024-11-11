const fs = require("fs");

let input = +fs.readFileSync(0).toString().trim()

let result = input

while(true) {
    if(result === 2) {
        break;
    }
    result /= 2
}

console.log(result)