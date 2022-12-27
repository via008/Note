var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x != 0)) {
    return false;
  }
  let reverseNum = 0;

  while (x > reverseNum) {
    reverseNum = reverseNum * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  return reverseNum === x || Math.floor(reverseNum / 10) === x;
};

console.log(isPalindrome(1));