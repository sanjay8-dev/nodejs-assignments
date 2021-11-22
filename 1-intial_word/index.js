// const intialWord= (fullName) =>{
//     let i =0;
//     let res;
//     [...fullName].every((char)=>{
//         if ((char == " ") && i!=0 ){
//             res = i;
//             return false        
//         }
//         i ++;
//         return true;
//     })
 
//     console.log(`Your Initial Word is ${fullName.slice(0, res)}`);
// }
// // const text  = new String("Sanjay Prakash")
let text;
process.stdout.write("Hi Can I know your Name? \n")
process.stdin.on("data", (data)=>{
    text = data.toString();
    console.log("Thank you !")
    // intialWord(text);
    console.log(intialWordNewSol(text));
    process.exit();

})

//alternative better solution//


const intialWordNewSol = (fullName) =>{

   let trimmedData = fullName.trim()

   let name = trimmedData.split(" ")
   
   return name[0]
}


