const fs = require('fs');

const arr = ["data1.txt", "data2.txt"]

arr.forEach((val)=>{
     let data = "\n" + fs.readFileSync(`./${val}`, "UTF-8") 
     fs.appendFileSync('data3.txt',data)

});





