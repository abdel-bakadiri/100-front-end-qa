console.log(document.getElementsByTagName("h1"));
// acces to value of data atteibut of h1
console.log(document.getElementsByTagName("h1")[0].dataset.keydata);
// set attribt value af h2
document.getElementsByTagName("h2")[0].dataset.total = 10;
console.log(document.getElementsByTagName("h2")[0].dataset.total);
