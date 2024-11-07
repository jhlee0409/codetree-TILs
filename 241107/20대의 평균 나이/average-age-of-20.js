const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number)
const found30 = input.findIndex(n => n >= 30)
input.splice(found30,1)
const result = input.reduce((acc,cur)=> acc+cur, 0) / input.length
console.log(result.toFixed(2).trim())