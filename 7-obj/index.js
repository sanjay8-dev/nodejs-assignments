const data = require('./data.json')

// let data = {
//     "personalDetails":{
//         "name": "John",
//         "age" : 31,
//         "city": "New York",
//     },
//     "academicDetails":{
//         "ssc":90,
//         "hsc":85,
//         "graduation":80
//     },
//     "hobbies":["Cricket","Guitar","comedy"]
// }

// dataStr = JSON.stringify(data) // converting data to string before changing it to obj to access the properties

// dataObj = JSON.parse(dataStr)



let [age,academicDetails] = [data.personalDetails.age,data.academicDetails.graduation];

let hobby = [];

 data.hobbies.forEach((data)=>{
    if(data.slice(0,1).toUpperCase()=="C"){
        hobby.push(data);
    }
})

console.log(hobby)
console.log(`John's age: ${age}, academicDetails for graduation :${academicDetails} marks, Hobbies starting with letter C: ${hobby}` ) 


