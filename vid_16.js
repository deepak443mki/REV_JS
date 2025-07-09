//singleton 

//object literals

const my_symb = Symbol("D")
const jsUser = {
    name: "Deepak",
    "code Name": "maverick",
    age: 21,
    location: "Bhubaneswar",
    email: "deepakk123@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Sunday", "Wednesday"],
    [my_symb]: "dk"
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["code Name"]);
// console.log(typeof(jsUser[my_symb]));


jsUser.email = "123deep@gmail.com"
// console.log(jsUser.email);
// Object.freeze(jsUser)
jsUser.age = 22
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
    
}
console.log(jsUser.greeting);


jsUser.greeting2 = function(){
    console.log(`Hello JS user ${this.name}`);
    
}
console.log(jsUser.greeting2());
