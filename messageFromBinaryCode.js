// You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

// Assuming that your hunch is correct, decode the message.

// Example

// For code = "010010000110010101101100011011000110111100100001", the output should be
// messageFromBinaryCode(code) = "Hello!".

// The first 8 characters of the code are 01001000, which is 72 in the binary numeral system. 72 stands for H in the ASCII-table, so the first letter is H.

function messageFromBinaryCode(code) {
  const arr = code.match(/[0-1]{8}/gi);

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let t = parseInt(arr[i], 2);
    result.push(String.fromCharCode(t));
  }

  return result.join("");
}
