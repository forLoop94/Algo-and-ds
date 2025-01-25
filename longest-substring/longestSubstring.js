const longestSubstring = (s) => {
  let maxLength = 0; 
  let charSet = new Set();
  let left = 0; 
  for (let right = 0; right < s.length; right++) {
      while (charSet.has(s[right])) {
          charSet.delete(s[left]);
          left++;
      }
      charSet.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
  }
  console.log(charSet);
  return maxLength;
}

console.log(longestSubstring("abcabctyughab"))