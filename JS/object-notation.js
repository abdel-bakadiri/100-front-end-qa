user = {
  name: "Abdel",
  contry: "France",
  city: "Paris",
  score: 100,
};
console.log(user.name);
console.log(user[`name`]);

for (const propriety in user) {
  console.log(user[propriety])
}