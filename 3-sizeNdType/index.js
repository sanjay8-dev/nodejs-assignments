//finding size and type of the file
const path = require('path')
const fs = require('fs');

const fileType = path.extname(__filename);
console.log("fileType: " + fileType);
fs.stat((__filename), (err,stat)=>{
console.log("fileSize: " + stat.size + " Bytes");
});