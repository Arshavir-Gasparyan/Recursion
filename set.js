let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4]);

const intersection = (setA, setB) => {
  return new Set([...setA, ...setB]);
};
console.log(intersection(setC, setB));
