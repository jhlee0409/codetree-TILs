const fs = require("fs");

let input = +fs.readFileSync(0).toString().trim()

let n = 1;
let r = input;

while(true) {
    r = Math.floor(r/n)
    if(r <= 1) {
        break
    }
    n++;
}
console.log(n)