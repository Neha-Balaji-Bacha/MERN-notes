function longestDistinctSubstr(s) {
  let set = new Set();
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    // If character already in window, shrink from left
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
// Example
console.log(longestDistinctSubstr("abbcda")); // 4 ("bcda")