function isPalindrome(word) {
  // Write your algorithm here
  const lowerWord=word.toLowerCase().replace(/[^a-z]/g, '');
  for (let i=0;i<lowerWord.length/2;i++)
  {
    if (lowerWord[i]!==(lowerWord[lowerWord.length-1-i]))
    {
      return false;
    }
  

  }
  return true; 
}

/* 
 isPalindrome, return true if it can be read the word the same forward and back, else return false
*/

/*
 lowerWord >> removed any char not in lowercase 
 check by lenght
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("le2vel"));
  console.log("=>", isPalindrome("Da d"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
