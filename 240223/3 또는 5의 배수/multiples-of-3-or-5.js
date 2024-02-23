let fs = require('fs')
let n = fs.readFileSync(0).toString().trim()
const f = n % 3 === 0 ? 'YES' : 'NO';
const s = n % 5 === 0 ? 'YES' : 'NO';
console.log(`${f}\n${s}`)