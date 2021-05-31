function oddOrEvan(num) {
  if (num % 2 === 0 && num !== 0) {
    return true;
  } else if (num === 0) {
    return false;
  } else {
    return oddOrEvan(Math.floor(num / 10));
  }
}
console.log(oddOrEvan(55));
