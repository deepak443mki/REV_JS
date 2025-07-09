// Types on memory - Stack(primitive) and heap(non-primitive)

let myYoutubeName = "Deepakkumarmajhi.com"
let anothername = myYoutubeName;

anothername = "Me and audi";
console.log(myYoutubeName);

console.log(anothername);

let userOne =  {
    email: "deepak@123gmail.com",
    upi: "user3@upi"
}

let userTwo = userOne;

userTwo.email = "depak@google.com";
console.log(userOne.email);
console.log(userTwo.email);

