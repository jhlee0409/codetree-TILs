const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n').map((string)=> string.split(' '))


let result = ''

for(const [a,b,c] of input) {
    result += `${+a * +b}\n`
    if(c === 'C') {
        break;
    }
}

console.log(result)