// problem: 3
// find the maximum number in an array



function getMaxInArray(arr) {
    let maxNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber=arr[i];
        }
    }
    return maxNumber;
}

console.log(getMaxInArray([5, 4, 9, 3, 90]));
;
