// Problem: 13
// calculate sum of all odd numbers in an array

function sumOdd(arr) {
    let sumOfOddNumbers = 0;
    for (const num of arr) {
        if (num % 2 !== 0) {
            sumOfOddNumbers = sumOfOddNumbers + num;
        }
    }
    return sumOfOddNumbers;
}

console.log(sumOdd([1, 2, 3, 4, 5, 6]));
