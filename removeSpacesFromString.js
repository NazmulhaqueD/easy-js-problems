// problem: 8
// remove all spaces from a string

const removeSpaceFromString = (str)=>{
    // const result = str.split(" ").join("");
    const result = str.replace(/ /g, "");
    return result;    
}

console.log(removeSpaceFromString("Hello Wor ld"));
