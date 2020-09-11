console.log(typeof 73); // number
console.log(typeof `literal template`); // string
console.log(typeof NaN); // number
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof function () {}); //function
console.log(typeof null); //object
console.log(typeof new Date()); //object
console.log(typeof /regex/); //object
console.log(null instanceof Object); //false
console.log({} instanceof Object); // true
console.log([] instanceof Object); // true
console.log(function () {} instanceof Object);
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // true
