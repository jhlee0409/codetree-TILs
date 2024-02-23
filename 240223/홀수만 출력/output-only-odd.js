let fs = require('fs')
let [s,e] = fs.readFileSync(0).toString().split(' ').map(v=> +v)

const r = Array.from({length: Math.ceil(e/2)}, (_,v)=> 2*v+1).join(' ')


console.log(r)