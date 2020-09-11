console.log(document.getElementById("main")); // <div id="main0> ... </div>
console.log(document.getElementsByTagName("h1")); // HTMLCollection(2)[h1, h2] ....
console.log(document.getElementsByClassName("theClass")); // HTMLCollection(2) [p.theClass, p.theClass]
console.log(document.querySelector(".theClass")); // <p class="theClass"> ...</p>
console.log(document.querySelectorAll("#main .theClass")); // NodeList(2) [p.theClass, p.theClass]
