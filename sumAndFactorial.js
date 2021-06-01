function arrSum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const [first, ...rest] = arr;
  return first + arrSum(rest);
}

const nums = [1, 2, 3, 4];

console.log(arrSum(nums));

function factorial(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
