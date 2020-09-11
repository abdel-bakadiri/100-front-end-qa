async function getNotes() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  const json = await response.json();
  console.table(json);
}
console.log("Get", getNotes());

async function postNote() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Abdel",
      body: "Front End developer",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const json = await response.json();
  console.log("POST", json);
}

console.log("POST", postNote());

async function putNote() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "Abdelouhab",
      body: "Front End developer",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const json = await response.json();
  console.log("PUT", json);
}

console.log("POST", putNote());

async function deleteNote() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
  const json = await response.json();
  console.log("POST", json);
}

console.log("DELETE", deleteNote());
