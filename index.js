function isPalindrome(word) {
  // Write your algorithm here
  let left = 0;
  let right = word.length - 1;

  while (left < right ) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
  Add your pseudocode here
  If given a word, compare letters beginning from the start of the word and end.

  iterate over each letter of the word and compare.

  ensure that each letter is the same letter until comparison meets in the middle.
*/

/*
  Add written explanation of your solution here
  Using code to compare letters as a 'checker' moves from the beginning and end of the word comparing each letter to make sure they are the same. If they are, it returns true and you have a palindrome. If they are different, it will return false. It adds 1 postion starting from the left and subtracts one position starting from the right and compares the letters.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
