let fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let num = +input

const result = num * 2 + 3

console.log(result)