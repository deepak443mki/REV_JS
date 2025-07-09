//array
const myArr = [0, 1, 2, 3, 4, 5, [1, 2, 3], "Deepak", true]
const myHeros = ["superman", "batman", "aquaman", 'flash']
const myArr2 = new Array(1, 2, 4)
// myArr2.push(7)
// myArr2.push(70)
// myArr2.pop()
// console.log(myArr[6][1]);
// console.log(myArr2);
// console.log(myArr2);

const newArr = myArr.join()
// console.log(newArr);
// console.log(myArr);

//slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log(myArr);
