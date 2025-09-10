// problem: 12
// calculate sum of all even numbers in an array

function sumOfEven(arr) {
    let sumOfEvenNumbers = 0;
    for (const num of arr) {
        if (num % 2 === 0) {
            sumOfEvenNumbers = sumOfEvenNumbers + num;
        }
    }
    return sumOfEvenNumbers;
}

console.log(sumOfEven([1, 2, 3, 4, 5, 6]));
