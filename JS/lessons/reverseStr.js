

function reverseStr(input){
console.log(input)

let split = input.split("")
console.log(split)
let rev = split.reverse()
console.log(rev)

let joined = rev.join("")
console.log(joined)


}
console.log(reverseStr("hello"))