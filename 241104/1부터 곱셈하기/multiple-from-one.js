const fs = require("fs");

let input = +fs.readFileSync(0).toString().trim()


let n = 1;
let r = 1;

while(true) {
    r*=n
    if(r >= input) {
        break
    }
    n++;
}

console.log(n)