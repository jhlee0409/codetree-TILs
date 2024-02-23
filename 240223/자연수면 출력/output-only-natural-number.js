let fs = require('fs')
let [s,e] = fs.readFileSync(0).toString().split(' ').map(v=> +v)
const r = s <= 0 ? 0 : `${s}`.repeat(e)
console.log(r)