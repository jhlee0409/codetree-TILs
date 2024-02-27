let fs = require('fs')
let [a, b] = fs.readFileSync(0).toString().split(' ').map(v=>+v)

const arr = Array.from({length: b - a + 1}, (_,v)=> v+a).filter(i => i % 5 === 0 || i % 7 === 0)
const leng = arr.length
const h = arr.reduce((acc,cur)=> acc+=cur ,0)
const aver = (h / leng).toFixed(1)

console.log(`${h} ${aver}`)