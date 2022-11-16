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
  isAnagram,
  pivotIndex,
  largestEvenNumber,
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

function isAnagram(string1, string2) {
  const arr1 = string1.toLowerCase().split('').sort().join('');
  const arr2 = string2.toLowerCase().split('').sort().join('');

  if (arr1 !== arr2) {
    return false;
  } else {
    return true;
  }
}

function pivotIndex(array) {
  if (array.length === 0) {
    return 0;
  }

  let totalSum = 0;
  totalSum = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  let leftSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (totalSum - leftSum - array[i] === leftSum) {
      return i;
    }
    leftSum += array[i];
  }
  return -1;
}

function largestEvenNumber(nums) {
  const evenArr = [];
  //copy the given array
  const digits = nums.slice();

  //if we are at the last number return it for index length 1
  if (digits.length == 1) {
    return digits[0];
  }

  //check if numbers are even and push even numbers to new array
  digits.forEach((number) => {
    if (number % 2 === 0) {
      evenArr.push(number);
    }
  });

  //add guard for if no even numbers exist in array
  if (evenArr.length === 0) {
    return -1;
  }

  //if we have even numbers check first two numbers in array and remove the lesser
  if (evenArr[0] < evenArr[1]) {
    //splice takes a start index and a delete count
    evenArr.splice(0, 1);
  } else {
    evenArr.splice(1, 1);
  }
  //with one less number in the array call the function for recursion

  return largestEvenNumber(evenArr);
}
