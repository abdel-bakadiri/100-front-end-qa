function append(...num) {
  const arrayLong = [1, 2, 3, 4, ...num];
  console.log(arrayLong); //[1,2,3,10,20,30]
}
append(10, 20, 30);
