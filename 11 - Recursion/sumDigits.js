/**
 * This static class solves Problem 1: Sum Digits of the recursion
 * assignment. The problem is as follows:
 *
 * Given a non-negative integer n, return the sum of its digits.
 * Examples:
 * If you ran iterativeCalculate(126) you would get a return value of 9.
 * If you ran recursiveCalculate(126) you would also get a return value of 9.
 *
 * @class
 */

class SumDigits {
  /**
   * This function calculates the sum of an integer's digits iteratively
   *
   * @param {number} n The integer whose digits will be summed.
   * @return The sum of the integer's digits
   */
  static iterativeCalculate(n) {
    const stringN = n.toString();
    let returnSum = 0;
    for (let i = 0; i < stringN.length; i++) {
      returnSum += parseInt(stringN.charAt(i));
    }
    return returnSum;
  }
  /**
   * This function calculates the sum of an integer's digits recursively
   *
   * @param {number} n The integer whose digits will be summed
   * @param {number} index The current index
   * @return The sum of the integer's digits
   */

  static recursiveCalculate(n, index = null) {
    const stringN = n.toString();

    if (index !== null) {
      return index < stringN.length
        ? parseInt(stringN.charAt(index)) +
            this.recursiveCalculate(n, index + 1)
        : 0;
    } else {
      return this.recursiveCalculate(n, 0);
    }
  }
}
//console.log(SumDigits.iterativeCalculate(126));
//console.log(SumDigits.recursiveCalculate(126));
