let fs = require('fs')
let [a,b] = fs.readFileSync(0).toString().split('\n')

const r = b.split(' ').reduce((acc,cur)=> +a > +cur ? acc += '1\n' : acc +=  '0\n'  ,'')
console.log(r)