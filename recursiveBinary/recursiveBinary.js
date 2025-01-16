const recursiveBinary = (n, array) => {
  if (n === 0) {
    return {"final num": n, "final array": array.reverse()}; 
  }

  array.push(n % 2);

  return recursiveBinary((Math.floor(n/2)), array);
}

console.log(recursiveBinary(233, []));