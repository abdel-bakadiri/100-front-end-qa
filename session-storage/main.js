const user = JSON.stringify({
  name: "abdel",
  score: 100,
});
console.log(user);
localStorage.setItem("user", user);
const theUser = localStorage.getItem("user", user);
console.log(JSON.parse(theUser));
