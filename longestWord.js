// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

// Example

// For text = "Ready, steady, go!", the output should be
// longestWord(text) = "steady".

function longestWord(text) {
  const arr = text.match(/[a-z]+/gi);

  let sorted = arr.sort((a, b) => b.length - a.length);

  return sorted[0];
}
