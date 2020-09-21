/**
 * /* Intermediate Algorithm Scripting: Steamroller
 * Flatten a nested array. You must account for varying levels of nesting.
 *
 * @format
 */

function steamrollArray(arr) {
  // this could work if they didn't say we couldn't use  this method:
  // let flatten= arr.flat(Infinity)
  // return flatten;

  //RECURSIVE SOLUTION

  // concat each element of the array with an empty array
  let flat = [].concat(...arr);
  //.some() to find put if the new array contains another array
  //If yes, call steamrollArray and repeat the process on the arrays that were deeply nested
  //If not, return the flattened array

  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
