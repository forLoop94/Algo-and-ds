const binarySearch = (arr, target, left=0, right=arr.length - 1) => {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right)/2);
  
  if (target === arr[mid]) {
    return mid;
  }

  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1)
  }

  return binarySearch(arr, target, mid + 1, right)

}

console.log(binarySearch([1, 3, 5, 7, 9, 11, 5, 15], 15))