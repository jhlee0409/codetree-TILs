let fs = require('fs')
let [cnt,...arr] = fs.readFileSync(0).toString().split('\n').map(v=>+v)

const s = arr.reduce((acc,cur)=> acc+=cur ,0)
const a = (s/cnt).toFixed(1)

console.log(`${s} ${a}`)