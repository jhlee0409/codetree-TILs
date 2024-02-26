let fs = require('fs')
let arr = fs.readFileSync(0).toString().split('\n').map(i=>+i)

const t = arr.filter(i=> i % 3 === 0).length
const f = arr.filter(i=> i % 5 === 0).length

console.log(`${t} ${f}`)