// DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, c
// ontinue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

function digitalRoot(n) {
    let str = n.toString().split('');
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result += Number(str[i]);
    }
    while (result >= 10) {
      result = Math.floor(result / 10) + (result % 10);
    }
    return result;
  }

console.log(digitalRoot(942)); 