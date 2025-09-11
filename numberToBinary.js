// Problem: 17
// convert a number to binary

function numberToBinary(num) {
    let binary = '';
    for (let i = 0; i < num;) {

        let reminder = num % 2;
        binary = reminder + binary;

        if (reminder === 0) {
            num = num / 2;
        }
        if (reminder === 1) {
            num = (num - 1) / 2;
        }

    }
    return parseInt(binary);
}

console.log(numberToBinary(45));

