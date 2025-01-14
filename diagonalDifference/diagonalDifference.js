const diagonalDifference = (arr) => {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        primaryDiagonal += arr[i][j]
      }
    }
    secondaryDiagonal += arr[i][arr[i].length - (i + 1)]
  }
  return Math.abs(primaryDiagonal - secondaryDiagonal)
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));