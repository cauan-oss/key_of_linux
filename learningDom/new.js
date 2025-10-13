const myObj = [
    1,
    2,
];

console.log(myObj)



const objInString = JSON.stringify(myObj)
console.log(objInString)


const TextToObj = JSON.parse(objInString)
console.log(TextToObj)