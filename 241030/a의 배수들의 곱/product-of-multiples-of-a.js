const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const [a,b] = input;

let result = 1;

Array.from({length:b}, (_,i)=> i+1).forEach((i)=> {
 if(i%a===0) {
    result*=i
 }
});
console.log(result)