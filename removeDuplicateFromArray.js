// problem: 7
// remove duplicate elements from an array

const removeDuplicateFromArray=(arr)=>{
    let withOutDuplicate=[];

    for(const num of arr){
        if(!withOutDuplicate.includes(num)){
            withOutDuplicate.push(num);
        }        
    }
    return withOutDuplicate;
}

console.log(removeDuplicateFromArray([1,3,2,2,1,3,5,5,3,5,5,6]));
