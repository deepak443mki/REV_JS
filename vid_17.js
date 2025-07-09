// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = true

// console.log(tinderUser);


const instaUser = {
    emial: "piki@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Priyanka",
            lastName: "Priyadarshini"
        }
    }
}

// console.log(instaUser.fullname.userFullName);
const obj1 = {
    1: "A",
    2: "B"
}
const obj2 = {
    3: "C",
    4: "D"
}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmial.com"
    },
    {
        id: 2,
        email: "w@gmial.com"
    },
    {
        id: 3,
        email: "r@gmial.com"
    }

]

// console.log(users[0].id);
// console.log(users[1].email);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));

