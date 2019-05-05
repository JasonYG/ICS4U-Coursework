/**
 * This static class solves Problem 2b: Mirrordromes
 * assignment. The problem is as follows:
 *
 * Given a string, calculate the amount of mirrordromes that
 * exist within a given string (including single letter mirrors).
 *
 * Examples:
 * If you ran iterativeCalculate("dob") you would get a return
 * value of 2 ("dob" and "o" are both mirrordromes).
 * If you ran recursiveCalculate("totally") you would get a
 * return value of 7 ("t", "t", "o", "l", "l", "ll", and
 * "tot" are all mirrordromes)
 *
 * @class
 */
class Mirrordromes {
  /**
   * This function checks if a string is a mirrordrome
   *
   * "A mirrordrome is a word that will check to see if a word can
   * be mirrored in the horizontal axis when cut in half."
   *
   * "Single letters that are considered mirrors in this program include:
   * i, l, m, n, o, t, u, v, w, x"
   *
   * "Letters that are considered mirrored opposites in this program include:
   * b <-> d, p <-> q, s <-> z"
   *
   * @param {string} str The string to be checked
   * @return true if the string is a mirrordrome, otherwise return false
   */
  static isMirrordrome(str) {
    str = str.toLowerCase();
    const singleLetterMirrordrome = [
      "i",
      "l",
      "m",
      "n",
      "o",
      "t",
      "u",
      "v",
      "w",
      "x"
    ];
    const mirrorOpposites = {
      b: "d",
      d: "b",
      p: "q",
      q: "p",
      s: "z",
      z: "s"
    };
    for (let i = 0; i < str.length / 2; i++) {
      if (str.charAt(i) === str.charAt(str.length - i - 1)) {
        if (!singleLetterMirrordrome.includes(str.charAt(i))) return false;
      } else if (
        mirrorOpposites[str.charAt(i)] !== str.charAt(str.length - i - 1)
      ) {
        return false;
      }
    }
    return true;
  }
  /**
   * This function calculates the amount of mirrordromes that exist
   * in a string
   *
   * @param {string} str The string that will be checked
   * @return the number of mirrordromes the string contains
   */
  static iterativeCalculate(str) {
    let mirrordromeNum = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length + 1; j++) {
        if (this.isMirrordrome(str.slice(i, j))) mirrordromeNum++;
      }
    }
    return mirrordromeNum;
  }
  /**
   * This function calculates the amount of mirrordromes that exist
   * in a string recursively
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
    if (currentStr.length > 0) {
      return this.isMirrordrome(currentStr)
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
//console.log(Mirrordromes.iterativeCalculate("dob"));
//console.log(Mirrordromes.recursiveCalculate("totally"));
