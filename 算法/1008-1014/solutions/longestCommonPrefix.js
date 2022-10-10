var longestCommonPrefix = function(strs) {
  if (strs.length === 1) {
    return strs[0];
  }
  
  let temp = '';
  for(let i = 0; i < strs[0].length; i ++) {
    const isSame = strs.every((str) => str[i] === strs[0][i]);
    if (isSame) {
      temp += strs[0][i];
    } else {
      break;
    }
  }

  return temp;

  // function twoLongestPre(str1, str2) {
  //   let temp = '';
  //   for(let i = 0; i < str1.length; i ++) {
  //     if (str1[i] === str2[i]) {
  //       temp += str1[i];
  //     } else {
  //       break;
  //     }
  //   }
  //   return temp;
  // }


  // if (strs.length === 1) {
  //   return strs[0];
  // }

  // let longestPre = strs[0];
  // for (let i = 1; i < strs.length; i ++) {
  //   if (longestPre === '') return '';
  
  //   longestPre = twoLongestPre(longestPre, strs[i]);
  // }

  // return longestPre;
};

console.log(longestCommonPrefix(["flower", "qwe"]));