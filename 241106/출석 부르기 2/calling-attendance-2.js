const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

const students = {
    1:'John',
    2:'Tom',
    3:'Paul',
    4:'Sam'
}

let result = ''



for(const number of input) {
    const hasStudent = !!students[number]
    if(!hasStudent) {
        result +='Vacancy'
        break
    }
    result += students[number]+'\n'
}

console.log(result)