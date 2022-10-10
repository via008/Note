var findMedianSortedArrays = function(nums1, nums2) {
  let i = 0, j = 0;
  const len1 = nums1.length, len2 = nums2.length;
  const center = Math.ceil((len1 + len2) / 2) - 1;
  let isOdd = (len1 + len2) & 1 === 1 ? true : false;
  let temp = 0, tempArr = [];
  let cen1 = 0, cen2 = 0;
  while (i < len1 || j < len2) {
    console.log('tempArr', tempArr);
      if (j >= len2 || nums1[i] < nums2[j]) {
          tempArr.push(nums1[i]);
          i ++;
      } else if (i >= len1 || nums1[i] >= nums2[j]) {
          tempArr.push(nums2[j]);
          j ++;
      }

      if (isOdd && temp === center) {
          cen1 = cen2 = tempArr[temp];
          break;
      }
      if (!isOdd && temp === center) {
          cen1 = tempArr[temp];
      }
      if (!isOdd && temp === center + 1) {
          cen2 = tempArr[temp];
          break;
      }
      temp = temp + 1;
  }

  return (cen1 + cen2) / 2;
};

console.log(findMedianSortedArrays([1, 3], [2, 7]))