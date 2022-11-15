const { reverseSentence, oddishEvenish, titleCase } = require('./index');

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
});
