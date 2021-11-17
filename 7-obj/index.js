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

dataStr = JSON.stringify(data) // converting data to string before changing it to obj to access the properties

dataObj = JSON.parse(dataStr)



let [age,academicDetails] = [dataObj.personalDetails.age,JSON.stringify(dataObj.academicDetails)];


let hobby = dataObj.hobbies.filter((data)=>{
    if(data.slice(0,1)=="C"){
        return data.toString();
    }
})


console.log(`John's age: ${age}, academicDetails:${academicDetails}, Hobbies starting with letter C: ${hobby}` ) 


