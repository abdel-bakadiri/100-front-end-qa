let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = ["a", "b", "c", "d"];
const array3 = ["Paris", "toulon", "Nice"];
const array4 = ["Rabat", "Settat", "MTP"];
const array5 = [14, true, "Perseverer abdou"];

array1 = [];
array2.length = 0;
array3.splice(0);
console.log(array1);
console.log(array2);
console.log(array3);
while (array4.length > 0) {
  array4.pop();
}
console.log(array4);
while (array5.length > 0) {
  array5.shift();
}
console.log(array5);
