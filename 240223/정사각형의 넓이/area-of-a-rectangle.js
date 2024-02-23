let fs = require('fs')
let n = fs.readFileSync(0).toString().trim()
console.log(`${n*n}\n${+n < 5 ? 'tiny' : ''}`)