const user = {
  name: "Abdel",
  country: "France",
  city: "Paris",
  score: 100,
};
console.log(user);
const response = delete user.country;
console.log(response);
const res = delete user.coco;
console.log(res);
console.log(user.hasOwnProperty(`country`));
console.log(user);
