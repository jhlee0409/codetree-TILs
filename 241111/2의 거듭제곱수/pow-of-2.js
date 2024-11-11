const fs = require("fs");

let input = +fs.readFileSync(0).toString().trim()

let result = 0;

while(true) {
    if(input === 2) {
        break;
    }
    input /= 2
    result +=2
}

console.log(result)