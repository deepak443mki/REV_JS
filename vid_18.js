const course = {
    courseName: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor, price} = course
console.log(instructor);
console.log(price);

// {
//     "name": "Deepak",
//     "age": "21"
// }