const alien = document.querySelector("#alien");
let nombreClics = 0;

function clic(nombreClics) {
  nombreClics++;
}

alien.onclick = function (nombreClics) {
  nombreClics.innerHTML = compteur++;
};
