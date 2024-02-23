let fs = require('fs')
let [s,e] = fs.readFileSync(0).toString().split(' ').map(v=> +v)

const r = Array.from({length: Math.ceil((e-s+1)/2)}, (_,v)=> 2*v+s).join(' ')


console.log(r)