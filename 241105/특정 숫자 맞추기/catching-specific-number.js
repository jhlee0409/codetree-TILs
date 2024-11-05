const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number)


let result = ''

for(const num of input) {
    if(num === 25) {
        result += 'Good'
        break;
    }

    if(num < 25) {
        result+= `Higher\n`
    } else {
        result+= `Lower\n`
    }
}

console.log(result)