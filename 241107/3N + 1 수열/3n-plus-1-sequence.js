const fs = require("fs");

let input = +fs.readFileSync(0).toString().trim()


let cnt = 0;

while(true) {
     if(input === 1) {
        break;
     }
     const isEven = input % 2 === 0
     if(isEven) {
        input = input / 2
     } else {
        input = input * 3 +1
     }
     cnt++;
}

console.log(cnt)