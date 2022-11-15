function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}
module.exports = { reverseSentence, oddishEvenish };

function oddishEvenish(num) {
  let digits = num.toString().split('');
  const realDigits = digits.map(Number);

  let sum = realDigits.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  if (sum % 2 == 0) {
    return 'Evenish';
  } else {
    return 'Oddish';
  }
}

console.log(oddishEvenish(123));
