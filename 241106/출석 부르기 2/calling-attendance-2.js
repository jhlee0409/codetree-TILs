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
    result += (students[number] ?? 'Vacancy') + '\n'
    if(result.includes('Vacancy')) {
        break;
    }
}

console.log(result)