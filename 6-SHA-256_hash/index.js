const crypto = require('crypto');
const fs = require('fs');


const text = fs.readFileSync("./msg.csv", "UTF-8")



const checkString =(val) =>{

 if(val.length) return val
 else {
     console.log("The message has to be 17 char");
     process.exit();
}
}


let myHash = crypto.createHash('sha256').update(checkString(text)).digest('hex');


console.log(`Hash : ${myHash}`);