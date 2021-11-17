const largestElement = (arr)=>{
    let max = 0;
    arr.forEach((ele=>{
        if(ele>max){
        max = ele;
        }
    }))
    return max;
}



const res = largestElement([88,2,3,4]);
console.log(res)