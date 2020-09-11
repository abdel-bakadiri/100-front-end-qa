let timer;
function startTimer() {
  setTimeout((val) => alert(`HELLO ${val}`), 3000, "Abdel");
}

function intervalPopup() {
  timer = setInterval(() => alert("Helllo"), 3000);
}

function killTimer() {
  clearInterval(timer);
}
