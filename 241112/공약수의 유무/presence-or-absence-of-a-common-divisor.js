const fs = require("fs");

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);



for(let i = a; i <= b; i++) {
    if(1920 % i === 0 && 2880 % i === 0) {
        console.log(1)
        return 
    }
}

console.log(0)