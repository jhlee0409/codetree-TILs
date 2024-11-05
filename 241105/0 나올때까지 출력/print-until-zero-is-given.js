const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let result = ''
for(const num of input ) {
    if(num === 0) {
        break;
    }
    result += `${num}\n`
}

console.log(result.trim())