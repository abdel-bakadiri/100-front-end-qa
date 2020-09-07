function multiply(x) {
  return (y) => {
    return (z) => {
      return x * y * z;
    };
  };
}
console.log(multiply(10)(10)(20));
