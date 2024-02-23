let fs = require('fs')
let [s,e] = fs.readFileSync(0).toString().split(' ').map(v=> +v)

const r = Array.from({length: Math.ceil((s-e+1)/2)}, (_,v)=> s-2*v).join(' ')
console.log(r)