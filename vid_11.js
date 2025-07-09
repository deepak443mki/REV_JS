const name = "deepak"
const repoCount = 60

//String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("DeepakGame")
console.log(gameName);

console.log(typeof(gameName));
console.log(typeof(name));

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "   Deepak  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://deepak.com/deepak%20majhi"
console.log(url.replace('%20', '-'));

console.log(url.includes("sindur"));

const splitString = "Deepak_Kumar_Majhi"
console.log(splitString.split('_'));
