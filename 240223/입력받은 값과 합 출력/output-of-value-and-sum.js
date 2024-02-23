let fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let [a, b] = input.split(' ')

console.log(`${a} ${b} ${+a + +b}`)