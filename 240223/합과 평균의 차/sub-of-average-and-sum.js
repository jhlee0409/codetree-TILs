let fs = require('fs')
let [a,b,c] = fs.readFileSync(0).toString().split(' ')
let sum = +a + +b + +c
console.log(`${sum}\n${sum/3}\n${sum - (sum/3)}`)