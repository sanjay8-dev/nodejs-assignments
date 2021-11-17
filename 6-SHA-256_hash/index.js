const crypto = require('crypto');
const fs = require('fs');

let myHash = crypto.createHash('sha256').update(fs.readFileSync("./msg.csv", "UTF-8")).digest('hex');


console.log(myHash);