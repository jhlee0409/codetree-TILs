let fs = require('fs')
let [n,...arr] = fs.readFileSync(0).toString().split('\n').map(v=> +v)

const r = arr.filter(i=>i % 2 === 1 && i % 3 === 0)

console.log([...(new Set(r))].join('\n'))