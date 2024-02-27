let fs = require('fs')
let [a,b] = fs.readFileSync(0).toString().split(' ').map(v=>+v)
const ans = Array.from({length: b},(_,v)=> v+1).filter(i=> i % a === 0).reduce((acc,cur)=> acc * cur,1)
console.log(ans)