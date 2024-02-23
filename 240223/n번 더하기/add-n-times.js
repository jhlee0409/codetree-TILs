let fs = require('fs')
let [s,e] = fs.readFileSync(0).toString().split(' ').map(v=> +v)
const r = Array.from({length:e},(_,v)=> v+1).reduce((acc,cur)=> acc+= `${cur*e + s}\n` , '')
console.log(r)