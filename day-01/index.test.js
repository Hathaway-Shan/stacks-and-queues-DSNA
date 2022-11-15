const { reverseSentence, oddishEvenish } = require('./index');

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
});
