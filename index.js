const dialog = document.getElementById("dialog");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", function () {
  dialog.setAttribute("open", true);
});

closeBtn.addEventListener("click", function () {
  dialog.removeAttribute("open");
});

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "300px";
  document.getElementById("fleche").style.display = "none";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";

  document.getElementById("fleche").style.display = "block";
}

let clicks = 0;
function increment() {
  clicks = clicks + 1;
  nombreClics.innerHTML = clicks + " " + "aliens";
}

/*  boutique x2 click
let doubleClick = 0;
function incrementDoubleClic() {
  doubleClick = clicks++;} */

const items = document.querySelectorAll(".boxImg");
const nbSlide = items.length;
const next = document.querySelector(".right");
const previous = document.querySelector(".left");

let count = 0;

function nextSlide() {
  items[count].classList.remove("active");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
  console.log(count);
}
next.addEventListener("click", nextSlide);

function previousSlide() {
  items[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  items[count].classList.add("active");
  console.log(count);
}
previous.addEventListener("click", previousSlide);
