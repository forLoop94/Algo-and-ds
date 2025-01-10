const recursiveFibonacci = (arr, n) => {
  if (arr.length === n) {
    return arr;
  }

  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return recursiveFibonacci(arr, n)
}

console.log(recursiveFibonacci([0, 1], 15))