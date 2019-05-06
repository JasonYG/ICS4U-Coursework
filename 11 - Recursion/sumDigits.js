/**
 * This static class solves Problem 1: Sum Digits of the recursion
 * assignment. The problem is as follows:
 *
 * Given a non-negative integer n, return the sum of its digits.
 * Examples:
 * If you ran iterativeCalculate(126) you would get a return value of 9.
 * If you ran recursiveCalculate(126) you would also get a return value of 9.
 *
 * Common pitfalls of recursion:
 *
 * Recursion uses a part of the system memory called the stack: a special part
 * of the computer's memory that stores temporary variables. All recursive functions
 * add to the computer's stack call, and are stored until the function call is finished.
 * Allocating memory to the slack is greater than that of an iterative function, and
 * in some cases, errors can result from too much memory being used from the stack
 * (e.g. a "call stack exceeded" error). Pitfalls of recursion therefore include its
 * more intensive use of memory compared to iterative functions, and the potential errors
 * that could result from the call stack.
 *
 * Recursive functions, because of their need to repeatedly allocate memory to
 * the stack, are generally slower than their iterative counterparts. It's almost
 * impossible to write a recursive function that is both faster and more memory efficient
 * than a method that uses iteration. The benefit of recursion over iteration, however,
 * is that it often simplifies a function's implementation that makes the code more
 * readable, easier to understand, and "elegant". In many algorithms, such as tree
 * traversal, recursion is used for ease of understanding and implementation.
 *
 * Although recursion is often "cleaner" than an iterative approach, recursive functions
 * can sometimes be harder to debug. This is because the output of the function isn't
 * always clear and can be hard to track as the complexity of a recursive function increases.
 * Iterative functions are advantaged in that their outputs are easier to track, and can be
 * easier to maintain and debug.
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

  static recursiveCalculate(n, index) {
    const stringN = n.toString();
    if (index !== undefined) {
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
console.log(SumDigits.recursiveCalculate(126));
