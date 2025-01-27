const minWindowSubstring = (s, t) => {
  if (s.length < t.length) return ""; // If s is shorter than t, no solution is possible.

    const targetCount = {}; // Map to store the frequency of characters in t
    for (const char of t) {
        targetCount[char] = (targetCount[char] || 0) + 1;
    }

    let left = 0; // Left pointer of the window
    let right = 0; // Right pointer of the window
    let minLength = Infinity; // Keep track of the minimum length
    let minWindow = ""; // Keep track of the result substring
    let required = Object.keys(targetCount).length; // Number of unique characters in t
    let formed = 0; // Number of unique characters in the current window that match t's frequency

    const windowCount = {}; // Map to store character frequencies in the current window

    while (right < s.length) {
        // Add the current character to the window
        const char = s[right];
        windowCount[char] = (windowCount[char] || 0) + 1;

        // Check if the current character matches the target frequency
        if (targetCount[char] && windowCount[char] === targetCount[char]) {
            formed++;
        }

        // Try to shrink the window from the left if it's valid
        while (formed === required) {
            const windowSize = right - left + 1;

            // Update the result if this window is smaller
            if (windowSize < minLength) {
                minLength = windowSize;
                minWindow = s.slice(left, right + 1);
            }

            // Remove the leftmost character and shrink the window
            const leftChar = s[left];
            windowCount[leftChar]--;
            if (targetCount[leftChar] && windowCount[leftChar] < targetCount[leftChar]) {
                formed--;
            }
            left++;
        }

        // Expand the window
        right++;
    }

    return minWindow;
}

console.log(minWindowSubstring("ADOBECODEBANC", "ABC"))