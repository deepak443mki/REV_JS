function calculateCartPrice(...num1){
    return num1
}


console.log(calculateCartPrice(2, 3, 4, 5, 6, 7))

const user = {
    bookName: "The positive mindset",
    price: 299
}

function handleObject(anyobject){
    console.log(`Book name is ${anyobject.bookName} and price is ${anyobject.price}`);
    
}
const myNewArray = [200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))