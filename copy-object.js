const user1 = {
  firstName: "Abdel",
  country: "France",
  city: "Paris",
};
const user2 = {
  firstName: "Abdel",
  country: "France",
  city: "Paris",
};
const user3 = user1;
// Object.is() compare two object if they are a same reference
console.log(Object.is(user1, user2)); // false
console.log(Object.is(user1, user3)); // true
// 1- Methode 1 :us a spread operator to create a copy of an object
const copyOfUser1 = { ...user1 };
console.log(Object.is(user1, copyOfUser1));
// 2. methode 2: use JSON.stringfy => parse
const copyOfUser2 = JSON.parse(JSON.stringify(user1));
console.log(copyOfUser2);
