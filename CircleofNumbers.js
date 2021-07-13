// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

// Example

// For n = 10 and firstNumber = 2, the output should be
// circleOfNumbers(n, firstNumber) = 7.

function circleOfNumbers(n, firstNumber) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  const halfwayPoint = arr.length / 2;

  if (firstNumber + halfwayPoint === arr.length) {
    return 0;
  }

  if (firstNumber > halfwayPoint) {
    return Math.ceil(firstNumber - halfwayPoint);
  } else {
    return Math.ceil(firstNumber + halfwayPoint);
  }
}
