let fs = require('fs')
let n = fs.readFileSync(0).toString().trim()
console.log(+n === 1 ? 't': 'f')