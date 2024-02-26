let fs = require('fs')
let n = +fs.readFileSync(0).toString().trim()

const arr = Array.from({length:n}, (_,v)=> v+1)

const f = arr.filter(i=> i % 4 === 0).length

const e = arr.filter(i => i % 100 === 0 && i % 400 !== 0 ).length

console.log(f-e)