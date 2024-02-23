let fs = require('fs')
let n = fs.readFileSync(0).toString().trim()
const r = () => {
    if(+n >= 3000) {
        return 'book'
    } else if(+n >= 1000) {
        return 'mask'
    } else if(+n >= 500) {
        return 'pen'
    }{
        return 'no'
    }
}

console.log(r())