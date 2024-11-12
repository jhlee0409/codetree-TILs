const fs = require("fs");

let input = +fs.readFileSync(0).toString().trim()

let result = ''

for(let i = 0; i < 2; i++) {
        result+= ('*'.repeat(input) + '\n').repeat(input) + '\n'
}

console.log(result)