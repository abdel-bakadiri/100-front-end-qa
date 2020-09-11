// the moste used method
const array1 = [1, 2, 3, 4, 5, 6];
console.log(array1);
// creat array result of map or filter
const array2 = array1.map((value) => value * 2);
console.log(array2);
const array3 = array2.filter((value) => value > 6);
console.log(array3);
// the bad way to do
const array4 = new Array(5);
array4.fill(1, 0, 5);
console.log(array4);
