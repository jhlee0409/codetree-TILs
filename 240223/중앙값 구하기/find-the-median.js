let fs = require('fs')
let [a, b, c] = fs.readFileSync(0).toString().split(' ').map(v=> +v)

const r = () => {
let temp  = a

    if(b > temp) {
        temp = temp 
        if(temp > c) {
            temp = temp
        } else {
            temp = a
        }
    } else {
        temp = b
        if(temp > c) {
            temp = c
        }  else {
            temp = a
        }
    }
    return temp
}


console.log(r())