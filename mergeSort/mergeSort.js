const merge = (left, right) => {
  const result = [];
  let i = 0, j = 0;

  // Compare elements from both arrays and add the smaller one to the result
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from the left array
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  // Add any remaining elements from the right array
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
};