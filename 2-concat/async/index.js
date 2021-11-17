const fs = require('fs');

const arr = ["data1.txt", "data2.txt"]

arr.forEach((val)=>{
  let content;
  fs.readFile(`./${val}`,(err,data)=>{
  content = `\n${data}`;
  fs.appendFile("./data3.txt",content,(err)=>{
      if (err) throw err;
      console.log("Appended Successfully!")
  })
  })
});




