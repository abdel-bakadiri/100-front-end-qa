// Get users using a promise
const URL = "https://jsonplaceholder.typicode.com/users";
console.log("before fetch in code");
fetch(URL)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

console.log("After fetch in code");

// Do the same  async await
async function getUsers() {
  console.log("before fetch using async/await");
  try {
    const response = await fetch(URL);
    const json = await response.json();
    console.log(json);
  } catch {
    console.log(err);
  }
  console.log("After fetch using async/await");
}

getUsers();
