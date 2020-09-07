const addOne = (function () {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
})();
console.log(addOne());
console.log(addOne());
console.log(addOne());
console.log(addOne());
console.log(addOne());
