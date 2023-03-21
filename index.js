const alien = document.querySelector("#alien");
let nombreClics = 0;

function clic(nombreClics) {
  nombreClics++;
}

alien.onclick = function (nombreClics) {
  nombreClics.innerHTML = compteur++;
};

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
