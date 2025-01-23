//maximum average subarray must use sliding window pattern

const findMaxAverage = (nums, k) => {
  let maxValue = 0;
  for (let i = 0; i < k; i++) {
    maxValue += nums[i];
  }
  console.log(maxValue)
  let currentValue = maxValue;

  for (let i = k; i < nums.length; i++) {
    currentValue += nums[i] - nums[i - k];
    if (currentValue > maxValue) {
      maxValue = currentValue
    }
  }
  return maxValue/k;
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))