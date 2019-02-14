/**
 * This class represents a fish
 * Wikipedia was consulted to create this class, in particular with the biological classifications.
 * Please see this link or SBI4U for more information on fish: https://en.wikipedia.org/wiki/Fish.
 *
 * @class
 * @returns the object that has the attributes and methods for this Fish object
 */
class Fish {
	/**
	 * Constructor function to create a Fish object
	 *
	 * @constructor
	 * @param {string} family - The family of the fish
	 * @param {string} subfamily - The subfamily of the fish
	 * @param {number} length - The length of the fish (in metres)
	 * @param {string} name - The name of the fish
	 */
	constructor(family, subfamily, length, name) {
    this.family = family;
    this.subfamily = subfamily;
    this.length = length;
    this.name = name;
  }

}
