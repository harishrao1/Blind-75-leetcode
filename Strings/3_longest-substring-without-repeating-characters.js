function lengthOfLongestSubstring(str) {
  const set = new Set();

  let left = 0;
  let right = 0;

  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

function longesSubString(str) {
  const set = new Set();

  let left = 0;
  let startIndex = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);

    if (right - left + 1 > maxLength) {
      startIndex = left;
    }
  }

  return str.substring(startIndex, startIndex + maxLength);
}

const str = "eojdowjwsedcd";
const str1 = "bbbbbb";

console.log(lengthOfLongestSubstring(str));
console.log(lengthOfLongestSubstring(str1));

console.log(longesSubString(str));
console.log(longesSubString(str1));
