const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)
let [a,b] = input
const arr = Array.from({length: b-a+1},(_, i) => i+a)
let result = 0;

arr.forEach((num)=> {
    if(num % 6 === 0 && num %8 !== 0) {
        result += num
    }
})

console.log(result)