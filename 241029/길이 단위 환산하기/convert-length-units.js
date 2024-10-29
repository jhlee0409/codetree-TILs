const fs = require("fs");

let input = fs.readFileSync(0).toString().trim()

console.log((+input*30.48).toFixed(1))