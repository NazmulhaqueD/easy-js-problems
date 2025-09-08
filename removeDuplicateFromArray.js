// problem: 7
// remove duplicate elements from an array

const removeDuplicateFromArray = (arr) => {
    const uniqueArray = [...new Set(arr)];
    return uniqueArray;
}

console.log(removeDuplicateFromArray([1, 3, 2, 2, 1, 3, 5, 5, 3, 5, 5, 6]));
