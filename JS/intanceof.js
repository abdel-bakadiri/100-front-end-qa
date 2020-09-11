console.log("hello" instanceof String); // false
console.log(typeof `hello` === "string"); // true
class Circle {
  x;
  y;
}

let newCircle = new Circle();
console.log(newCircle instanceof Circle); // true
