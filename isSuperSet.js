let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

const isSuperset = (setA, setB) => {
  for (let element of setB) {
    if (!setA.has(element)) {
      return false;
    }
  }
  return true;
};
console.log(isSuperset(setA, setB));
