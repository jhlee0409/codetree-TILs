function sol() {
let a = 5;
let b=  6;
let c = 7;
[a, b, c] = [c, a, b]
return {a,b,c}
}
const {a,b,c}  =sol()

console.log(`${a}\n${b}\n${c}`)