let fs = require('fs')
let [a,b] = fs.readFileSync(0).toString().split('\n')

console.log(`${b}\n${a}`)