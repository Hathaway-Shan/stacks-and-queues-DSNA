function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}
module.exports = {
  reverseSentence,
  oddishEvenish,
  titleCase,
  at,
  multiplesOfN,
};

function oddishEvenish(num) {
  const digits = num.toString().split('');
  const realDigits = digits.map(Number);

  const sum = realDigits.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  if (sum % 2 == 0) {
    return 'Evenish';
  } else {
    return 'Oddish';
  }
}

function titleCase(str) {
  const newStr = str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return newStr.join(' ');
}

function at(array, index) {
  const isNeg = Math.sign(index);
  const reverseArr = array.reverse();
  const negIndex = index * -1;
  let result;

  switch (isNeg) {
    case 1:
      result = array[index];

      break;
    case -1:
      result = reverseArr[negIndex - 1];
      break;
  }
  return result;
}

function multiplesOfN(n) {
  const multiplesArr = [];

  for (let i = 1; i <= 50; i++) {
    if (i % n === 0) {
      multiplesArr.push(i);
    }
  }

  return multiplesArr;
}
