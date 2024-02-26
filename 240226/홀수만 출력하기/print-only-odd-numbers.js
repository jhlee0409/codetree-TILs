let fs = require('fs')
let arr = fs.readFileSync(0).toString().split('\n').map(v=> +v)

const r = arr.reduce((acc,cur)=>  acc+= cur % 2 === 1 && cur % 3 === 0 ? `${cur}\n` : ''  ,'')

console.log(r)