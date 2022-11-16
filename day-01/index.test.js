const {
  reverseSentence,
  oddishEvenish,
  titleCase,
  at,
  multiplesOfN,
  isAnagram,
  pivotIndex,
  largestEvenNumber,
} = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
  describe('oddishEvenish', () => {
    it('sums the digits of a number and returns Oddish or Evenish', () => {
      expect(oddishEvenish(123)).toBe('Evenish');
    });
  });
  describe('titleCase', () => {
    it('replaces the first letter of each word in a string with a capital letter', () => {
      expect(titleCase('a quick brown fox')).toBe('A Quick Brown Fox');
    });
  });
  describe('at', () => {
    it('takes an array and index and returns the item at that index works with negative numbers as well', () => {
      expect(at([1, 2, 3, 4, 5], -2)).toBe(4);
    });
  });
  describe('multiplesOfN', () => {
    it('takes a number and returns all numbers from 1-50 that are multiples of that number', () => {
      expect(multiplesOfN(8)).toStrictEqual([8, 16, 24, 32, 40, 48]);
    });
  });
  describe('isAnagram', () => {
    it('takes two strings if the strings contain all the same letters returns true otherwise returns false', () => {
      expect(isAnagram('dog', 'god')).toBe(true);
    });
  });
  describe('pivotIndex', () => {
    it('finds the lowest index in an array where the sum of numbers on the left and right side of that index are equal if no such index exists return -1', () => {
      expect(pivotIndex([1, 3, 7, 6, 9, 2])).toBe(3);
    });
  });
  describe('largestEvenNumber', () => {
    it('returns the largest even number in an array with recursion if no even numbers exist returns -1', () => {
      expect(largestEvenNumber([1, 2, 3, 4, 5, 6])).toBe(6);
    });
  });
});
