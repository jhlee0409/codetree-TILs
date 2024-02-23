let fs = require('fs')
let n = +fs.readFileSync(0).toString().trim()

const r = Array.from({length:n},(_,v)=> v+1).reduce((acc,cur)=> acc+=` ${cur}`  ,'').trim()
console.log(r)