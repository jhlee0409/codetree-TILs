let fs = require('fs')
let n = +fs.readFileSync(0).toString().split(' ');
const r = [...('*'.repeat(n))].join('\n')
console.log(r)