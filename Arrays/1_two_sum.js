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
