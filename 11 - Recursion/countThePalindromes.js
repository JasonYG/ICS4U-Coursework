/**
 * This static class solves Problem 2: Count the Palindromes
 * assignment. The problem is as follows:
 *
 * Given a string, calculate the amount of palindromes that exist within
 * that string (single letters excluded).  For example, the work "kayak"
 * would contain two palindromes within it ("kayak" and "aya").
 *
 * Examples:
 * If you ran iterativeCalculate("kayak") you would get a return value
 * of 2 ("kayak" and "aya" are both palindromes).
 * If you ran recursiveCalculate("kayak") you would also get a return 
 * value of 2 ("kayak" and "aya" are both palindromes).

 *
 * @class
 */
class CountThePalindromes {
  /**
   * This function checks if a string is a palindrome
   *
   * @param {string} str The string that is to be verified
   * @return true if the string is a palindrome, false if it isn't
   */
  static isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
    }
    return true;
  }
  /**
   * This function calculates the amount of palindromes that exist
   * in a string
   *
   * @param {string} str The string that will be checked
   * @return the number of palindromes the string contains
   */
  static iterativeCalculate(str) {
    let palindromeNum = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 2; j < str.length + 1; j++) {
        if (this.isPalindrome(str.slice(i, j))) palindromeNum++;
      }
    }
    return palindromeNum;
  }
  /**
   *
   * @param {string} str The string that will be checked
   * @param {number} bottomIndex The current index from the bottom of the word
   * @param {number} topIndex The current index from the top of the word
   */
  static recursiveCalculate(str, bottomIndex = null, topIndex = null) {
    bottomIndex = bottomIndex !== null ? bottomIndex : 0;
    topIndex = topIndex !== null ? topIndex : str.length;
    const currentStr = str
      .toString()
      .slice(bottomIndex, topIndex)
      .toLowerCase();
    if (currentStr.length > 1) {
      return this.isPalindrome(currentStr)
        ? 1 +
            this.recursiveCalculate(str, bottomIndex + 1, topIndex) +
            this.recursiveCalculate(str, bottomIndex, topIndex - 1) -
            this.recursiveCalculate(str, bottomIndex + 1, topIndex - 1)
        : 0 +
            this.recursiveCalculate(str, bottomIndex + 1, topIndex) +
            this.recursiveCalculate(str, bottomIndex, topIndex - 1) -
            this.recursiveCalculate(str, bottomIndex + 1, topIndex - 1);
    } else {
      return 0;
    }
  }
}
// console.log(CountThePalindromes.iterativeCalculate("kayak"));
// console.log(CountThePalindromes.recursiveCalculate("kayak"));
