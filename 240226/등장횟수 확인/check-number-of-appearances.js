let fs = require('fs')
let arr = fs.readFileSync(0).toString().split('\n')
const r = arr.filter(i=> +i % 2 === 0).length

console.log(r)