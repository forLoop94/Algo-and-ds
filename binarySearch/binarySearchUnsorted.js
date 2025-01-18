const BSU = (arr, target) => {
  const sortedArr = arr.slice().sort((a, b) => a - b);

  const binarySearch = (left = 0, right = arr.length - 1) => {
    if (left > right) {
      return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (target === sortedArr[mid]) {
      return mid;
    }

    if (target < sortedArr[mid]) {
      return binarySearch(left, mid - 1);
    }

    return binarySearch(mid + 1, right);
  };

  return binarySearch(0, sortedArr.length - 1);
};

console.log(BSU([1, 3, 13, 7, 9, 11, 5, 15], 13));