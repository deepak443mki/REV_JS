const myDate = new Date();
// console.log(`MyDate: ${myDate}`);

let myCreatedDate = new Date(2004, 8, 23, 4, 30)
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))