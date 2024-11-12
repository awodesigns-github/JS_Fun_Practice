/**
 * Returns the arguments passed
 * @param {any} x
 * @returns {any}
 */
const identity = (x) => x;

/**
 * Returns the sum of two numbers a and b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const addb = (a, b) => a + b;

/**
 * Returns the difference of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const subb = (a, b) => a - b;

/**
 * Returns the product of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const mulb = (a, b) => a * b;

/**
 * Returns the minimum between two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const minb = (a, b) => a < b ? a : b;

/**
 * Returns the maximum between two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const maxb = (a, b) => a > b ? a : b;

/**
 * Returns the sum of the passed arguments
 * @param {number} ...nums
 * @returns {number} 
 */
const add = (...nums) => nums.reduce((prev, curr) => prev + curr)

module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
    add
}