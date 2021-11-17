const intialWord= (fullName) =>{
    let i =0;
    let res;
    [...fullName].every((char)=>{
        if ((char == " ") && i!=0 ){
            res = i;
            return false        
        }
        i ++;
        return true;
    })
 
    console.log(`Your Initial Word is ${fullName.slice(0, res)}`);
}
// const text  = new String("Sanjay Prakash")
let text;
process.stdout.write("Hi Can I know your Name? \n")
process.stdin.on("data", (data)=>{
    text = data.toString();
    console.log("Thank you !")
    intialWord(text);
    process.exit();

})
