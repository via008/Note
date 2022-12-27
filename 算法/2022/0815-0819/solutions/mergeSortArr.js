function solution(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let len = m + n - 1;

  while (len >= 0) {
    const num1 = nums1[i];
    const num2 = nums2[j];

    if (num2 > num1 || i < 0) {
      nums1[len] = num2;
      j--;
    } else if (num2 <= num1 || j < 0) {
      nums1[len] = num1;
      i--;
    }
    len--;
  }

  return nums1;
}
