// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example

// For n = 152, the output should be
// deleteDigit(n) = 52;
// For n = 1001, the output should be
// deleteDigit(n) = 101.

function deleteDigit(n) {
  let te = n.toString().split("");
  let result = [];

  for (let i = 0; i < te.length; i++) {
    let temp = te.slice();

    //Removes current index from array
    temp.splice(i, 1);

    result.push(parseInt(temp.join("")));
  }

  //returns highest value from array
  return Math.max(...result);
}
