const longestString = (str)=>{
    let longest;
    let len = 0;
    str.forEach((strng)=>{
        if(strng.length>len){
            len = strng.length
            longest = strng
            
        }
    })
    return longest;
}

console.log(longestString(["pikachu","charizard","Tortera"]))