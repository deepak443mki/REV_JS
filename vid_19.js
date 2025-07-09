// function sayMyName(){
//     console.log("Deepak");
    
// }
// sayMyName()



function addTwoNumber(number1, number2){
    return number1 + number2;
    
}

const result = addTwoNumber(2, 4)
// console.log(`Result: ${result}`);


function loginUserMessage(username = "user"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Deepak"));
console.log(loginUserMessage());
