let fs = require('fs')
let [a, b, c] = fs.readFileSync(0).toString().split(' ').map(v=> +v)

let temp;

if(a > b) {
    if(a > c) {
        if(c > b) {
            temp = c
        } else {
            temp = b
        }
        
    } else {
        temp = a 
    }
} else {
    if(a > c) {
        temp = a
    } else {
        if(c > b) {
            temp = b
        } else  {
            temp = c
        }
    }
    
}


console.log(temp)