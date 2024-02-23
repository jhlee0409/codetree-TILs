let fs = require('fs')
let n = +(fs.readFileSync(0).toString().trim())

const f = n % 2 === 0 ? n : n + 3
const r = f % 3 === 0 ? f / 3 : f
console.log(r)