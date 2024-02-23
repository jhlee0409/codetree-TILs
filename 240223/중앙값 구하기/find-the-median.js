let fs = require('fs')
let [a, b, c] = fs.readFileSync(0).toString().split(' ').map(v=> +v)

let temp = a

if(temp > b) {
    if(temp < c) {
    }  else {
        if(c < a) {
            temp = c
        } else {
            temp = a
        }
    }
} else {
    temp = b
    if(temp < c) {

    } else {
        temp = c
        if(temp > a) {

        } else {
            temp = a
        }
    }
}

console.log(temp)