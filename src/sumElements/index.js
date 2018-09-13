/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  /* your logic here...*/
  let sum = 0;

  sum = arr.reduce((acc, elem) => {
    if (typeof +acc === 'number' && typeof +elem === 'number') {
      return acc + elem;
    }
  }, 0);

  return sum;
};

subElements(['1', 'hi', 3]);

export default sumElements;
