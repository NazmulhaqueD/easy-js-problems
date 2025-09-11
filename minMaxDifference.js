// Problem: 16
// calculate the difference between max and min in an array

function diffBetweenMaxAndMin(arr) {
    let max = arr[0];
    let min = arr[0];

    for (const num of arr) {
        if (num > max) {
            max = num;
        }
        else if (num < min) {
            min = num;
        }
    }
    return max - min;

}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, -9];
console.log(diffBetweenMaxAndMin(arr));



