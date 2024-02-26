let fs = require('fs')
let n = +fs.readFileSync(0).toString().trim()

const arr = Array.from({length:n},(_,v)=> v+1)

const xy = arr.filter(i=> i % 2 === 0 && i % 3 === 0).length 
const yz = arr.filter(i=> i % 3 === 0 && i % 12 === 0).length 




const x = arr.filter(i=> i % 2 === 0).length - xy;
const y = arr.filter(i=> i % 3 === 0).length - yz;
const z = arr.filter(i=> i % 12 === 0).length;

console.log(`${x} ${y} ${z}`)