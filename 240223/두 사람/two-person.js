let fs = require('fs')
let arr = fs.readFileSync(0).toString().split('\n')
const r = arr.find((v)=> {
    const [a,b] = v.split(' ')
    if( +a > 18 && b === 'M'){
        return true
    } else {
        return false
    }
}  )


console.log(!!r ? 1 : 0)