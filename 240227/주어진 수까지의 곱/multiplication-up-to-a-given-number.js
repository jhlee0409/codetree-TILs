let fs = require('fs')
let [a,b] = fs.readFileSync(0).toString().split(' ').map(v=>+v)
const sum = Array.from({length: b-a+1},(_,v)=> v + a).reduce((acc,cur)=> acc*cur,1)
console.log(sum)