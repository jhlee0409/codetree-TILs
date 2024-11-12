const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

for(const num of input) {
    if(num % 3 !== 0) {
        console.log(0)
        return;
    }
}
console.log(1)