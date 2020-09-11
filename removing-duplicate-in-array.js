const exampleArray = [1, 2, 5, 1, 1, 2, 3, 4, 6, 2];
// 1.Method 1 using Set
const singleValueUsingSet = new Set();
exampleArray.forEach((value) => singleValueUsingSet.add(value));
console.log(singleValueUsingSet);
// 1.Method 2 : if we won't using set
const singleValues = [];
exampleArray.forEach((value) => {
  if (!singleValues.includes(value)) {
    singleValues.push(value);
  }
});
 console.log(singleValues);