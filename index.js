const alien = document.querySelector("#alien");
let nombreClics = 0;

function clic(nombreClics) {
  nombreClics++;
}

alien.onclick = function (nombreClics) {
  nombreClics.innerHTML = compteur++;
};

const dialog =
document.getElementById('dialog');
const openBtn =
document.getElementById('openBtn');
const closeBtn =
document.getElementById('closeBtn');

openBtn.addEventListener('click',
function () {
  dialog.setAttribute('open', true);
})

closeBtn.addEventListener('click',
function () {
  dialog.removeAttribute('open')
});