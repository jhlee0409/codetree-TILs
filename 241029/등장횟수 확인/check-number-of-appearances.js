const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let result = 0;

input.forEach((num)=> {
    if(num % 2 === 0) {
        result++;
    }
})

console.log(result)