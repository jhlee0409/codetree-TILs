let fs = require('fs')
let [n, m] = fs.readFileSync(0).toString().split(' ').map(v=>+v)

let sumVal = 0;

for (let i = n; i <= m; i++) {
        sumVal += i;
}

console.log(sumVal);