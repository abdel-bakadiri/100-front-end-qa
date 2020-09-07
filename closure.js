const addOne = function () {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
};
result = addOne();
console.log(result());
console.log(result());

