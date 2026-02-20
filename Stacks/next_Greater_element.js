function nextGreaterElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = []; // store indices

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = nums[i];
    }

    stack.push(i);
  }

  return result;
}

console.log(nextGreaterElement([2, 1, 2, 4, 3]));
