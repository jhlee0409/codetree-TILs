let fs = require('fs')
let [a,b] = fs.readFileSync(0).toString().split(' ').map(v=>+v)
const ans = a ** b
console.log(ans)