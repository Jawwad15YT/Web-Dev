let student = {
    Name:"Adib",
    Age:16 ,
    Country:"Bangladesh",
    Course:"Web Dev",
    Grade: 10
}
console.log(student)

let StudentJSON = JSON.stringify(student);

console.log(StudentJSON);

let ReceiveStudentJSON = JSON.parse(StudentJSON)

console.log(ReceiveStudentJSON)