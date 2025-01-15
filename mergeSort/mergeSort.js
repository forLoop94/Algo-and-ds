const mergeSort = (array) => {
  // Base case: if the array has 1 or no elements, it is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Split the array into two halves
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
};

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

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted:", unsortedArray);
console.log("Sorted:", mergeSort(unsortedArray));