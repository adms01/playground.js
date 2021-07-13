// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

function adjacentElementsProduct(a) {
  var maximum = -Infinity;
  for (var i = 0; i < a.length - 1; i++) {
    maximum = a[i] * a[i + 1] > maximum ? a[i] * a[i + 1] : maximum;
  }
  return maximum;
}
