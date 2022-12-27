function solution(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (map.has(num)) {
      return [map.get(num), i];
    } else {
      map.set(diff, i);
    }
  }
}
