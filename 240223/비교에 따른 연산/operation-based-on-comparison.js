let fs = require('fs')
let [a, b] = fs.readFileSync(0).toString().split(' ')
console.log(+a > +b ? +a * +b : +a % +b)