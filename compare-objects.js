const user1 = {
  name: "Abdel",
  country: "France",
  city: "Paris",
};
const user2 = {
  name: "Abdel",
  country: "France",
  city: "Paris",
};
const user3 = {
  country: "France",
  name: "Abdel",
  city: "Paris",
};

console.log(user1 === user2); // false: passage by reference

// 1. method 1 if properties in in order !!!!
const stringUser1 = JSON.stringify(user1);
const stringUser2 = JSON.stringify(user2);
console.log(stringUser1 === stringUser2); // true

//2. Solution 2 : using getOwnPropertyNames static method of Object

console.log(Object.getOwnPropertyNames(user1)); // ['name', 'country', 'city' ]
function isTheObjSame(obj1, obj2) {
  const propertiesOfObj1 = Object.getOwnPropertyNames(obj1);
  const propertiesOfObj2 = Object.getOwnPropertyNames(obj2);
  if (propertiesOfObj1.length !== propertiesOfObj2.length) {
    return false;
  }
  for (let i = 0; i < propertiesOfObj1.length; i++) {
    const namePrperty = propertiesOfObj1[i];
    if (obj1[namePrperty] !== obj2[namePrperty]) {
      return false;
    }
  }
  return true;
}

console.log(isTheObjSame(user1, user2));
console.log(isTheObjSame(user1, user3));
