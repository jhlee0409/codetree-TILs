let fs = require('fs')
let [a,b,c] = fs.readFileSync(0).toString().split(' ').map((v)=> +v)

if(b > a && b < c) {
    console.log(1)
} else {
    console.log(0)
}