let fs = require('fs')
let [a, b] = fs.readFileSync(0).toString().split(' ').map(v=>+v)

const arr = Array.from({length: (a > b ? a - b : b - a) + 1}, (_,v)=> v + Math.min(a,b)).filter(i => i % 5 === 0)
const h = arr.reduce((acc,cur)=> acc+=cur ,0)

console.log(h)