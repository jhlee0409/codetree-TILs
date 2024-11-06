const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let cnt = 0;
let reuslt = '';

for(const number of input) {
    if(cnt === 3) {
        break
    }
    const isEven = number % 2 === 0

    if(isEven) {
        const r = Math.floor(number / 2)
        reuslt += `${r}\n`
        cnt++
    }
}

console.log(reuslt)