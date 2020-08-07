// const doubleIt = function myFun(num) {
//     return num*2;
// }

const doubleIt = num => num*2;
const result = doubleIt(5);
console.log(result);

const add = (x, y) => x+y;
const resultAdd = add(50, 70);
console.log(resultAdd);

const give5 = () =>  5;
const resultGive5 = give5();
console.log(resultGive5);

const doMath = (x, y) => {
    const sum = x+y;
    const diff = x-y;
    const resultMultilply = sum*diff;
    return resultMultilply;
}
const resultDoMath = doMath(5, 10);
console.log(resultDoMath);