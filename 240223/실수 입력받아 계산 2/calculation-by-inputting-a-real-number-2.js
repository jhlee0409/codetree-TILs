let fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

const result = (+input + 1.5).toFixed(2)

console.log(result)