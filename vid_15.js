const marvel_heros = ["Thor", "Iron Man", "Spider man"]
const DC_heros = ["Superman", "batman", "flash"]

// marvel_heros.push(DC_heros)
// console.log(marvel_heros);

const newHeros = marvel_heros.concat(DC_heros)
console.log(newHeros);

const allHeros = [...marvel_heros, ...DC_heros]
console.log(allHeros);


const another_array = [1, 2, 34, [4, 5, 6], 5, [55, 6, 7,6, [3, 9, 8, 0]]]
const my_new_another_array = another_array.flat(3)
console.log(my_new_another_array);

console.log(Array.isArray("Deepak"));
console.log(Array.from("India"));
console.log();


let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2 , score3));
