let fs = require('fs')
let n = fs.readFileSync(0).toString().trim()

if(+n % 3 === 0 || +n % 5 === 0 ){
    console.log('1')
} else {
    console.log('0')
}