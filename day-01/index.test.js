const { reverseSentence, oddishEvenish, titleCase, at } = require('./index');

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
});
