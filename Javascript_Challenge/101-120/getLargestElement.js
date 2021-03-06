// Write a function called "getLargestElement".

// Given an array, "getLargestElement" returns the largest number in the given array.

// Notes:
// * It should return 0 if the array is empty.

// var output = getLargestElement([5, 2, 8, 3]);
// console.log(output); // --> 8;

function getLargestElement(arr) {
  // your code here
  if (arr.length < 1) {
    return 0;
  }
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
