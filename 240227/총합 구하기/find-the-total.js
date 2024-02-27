let fs = require('fs')
let [a,b] = fs.readFileSync(0).toString().split(' ').map(v=>+v)

const arr = Array.from({length: b - a + 1},(_,v)=> v+a).filter(i=> i%6===0 && i%8!==0).reduce((acc,cur)=> acc+=cur,0)
console.log(arr)