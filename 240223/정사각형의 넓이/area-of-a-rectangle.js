let fs = require('fs')
let n = fs.readFileSync(0).toString().trim()
const r = +n  < 5 ? 'tiny' : +n * +n
console.log(r)