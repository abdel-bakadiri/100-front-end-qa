function normalFunction(param) {
  return param + 1;
}
console.log(normalFunction(10));
const theSameInArrowFunction = (param) => param + 1;
console.log(theSameInArrowFunction(10));
// but be attention to this issue: Caused by a kyword this => see example bellow
const user = {
  firstName: "Abdel",
  score: 100,
  message: function () {
    return `${this.firstName} has as a score ${this.score}`; // great that's be welle work
  },
  messageUsingArrowFunction: () =>
    `${this.firstName} has as a score ${this.score}`, // !it doesnt work => thi is undefined
};
console.log(user.message());
console.log(user.messageUsingArrowFunction());
