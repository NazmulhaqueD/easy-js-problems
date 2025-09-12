// Problem: 18
// convert binary to decimal

function binaryToDecimal(str) {
    let decimalNumber = 0;

    for (let i = 0; i < str.length; i++) {
        const digitParseToDecimal = parseInt(str[i]) * (2 ** ((str.length - 1) - i));
        decimalNumber = decimalNumber + digitParseToDecimal;
    }
    return decimalNumber;
}

console.log(binaryToDecimal('1011'));
