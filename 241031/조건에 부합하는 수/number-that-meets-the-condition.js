const fs = require("fs");

let input = +fs.readFileSync(0).toString().trim()

let result = ''
Array.from({length: input}, (_,i)=> i+1).forEach((i)=> {
const con1 = i % 2 === 0 && i % 4 !== 0;
const con2 = Math.floor(i/8) % 2 == 0;
const con3 = i % 7 < 4;
if(!con1 && !con2 && !con3) {
    result += `${i} `
}
})

console.log(result.trim())