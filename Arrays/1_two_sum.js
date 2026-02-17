const twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let complementPair = target - nums[i];

    if (map[complementPair] !== undefined) {
      return [map[complementPair], i];
    } else {
      map[value] = i;
    }
  }

  return [-1, -1];
};

// When Array is sorted
function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}
