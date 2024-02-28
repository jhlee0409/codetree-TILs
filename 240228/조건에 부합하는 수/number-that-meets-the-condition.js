let fs = require('fs')
let n = +fs.readFileSync(0).toString()

const arr = Array.from({length: n}, (_,v)=> v + 1)

const r = []

for(let i of arr) {
    if(i % 2 === 0 && i % 4 !== 0) {
        continue;
    } else if( Math.floor(i/8) % 2 === 0) {
        continue;
    } else if(i % 7 < 4) {
        continue;
    } else {
        r.push(i)
    }
}

console.log(r.join(' '))