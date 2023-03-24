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


let clicks = 0;
function increment() {
  if (doubleClick === 0) {
    clicks = clicks + 1;
    nombreClics.innerHTML = clicks + " " + "aliens";
  } else if (doubleClick === 1) {
    clicks = clicks + 2;
    nombreClics.innerHTML = clicks + " " + "aliens";
  } else if (doubleClick === 2) {
    clicks = clicks + 4;
    nombreClics.innerHTML = clicks + " " + "aliens";
  } else if (doubleClick === 3) {
    clicks = clicks + 5;
    nombreClics.innerHTML = clicks + " " + "aliens";
  } else if (doubleClick === 4) {
    clicks = clicks + 6;
    nombreClics.innerHTML = clicks + " " + "aliens";
  } else if (doubleClick === 5) {
    clicks = clicks + 7;
    nombreClics.innerHTML = clicks + " " + "aliens";
  } else if (doubleClick === 6) {
    clicks = clicks + 8;
    nombreClics.innerHTML = clicks + " " + "aliens";
  } else if (doubleClick === 7) {
    clicks = clicks + 9;
    nombreClics.innerHTML = clicks + " " + "aliens";
  } else if (doubleClick === 8) {
    clicks = clicks + 10;
    nombreClics.innerHTML = clicks + " " + "aliens";
  }
}
/* boutique x2 click */
let doubleClick = 0;
function incrementDoubleClic() {
  doubleClick = doubleClick + 1;
}

//1. Creer une variable
// 2. add event listener definie si il est vrai ou faux
//3. if ( variable===true){function increment() {
//clicks = clicks + 2;
//nombreClics.innerHTML = clicks + " " + "aliens";
//}else }


const buy = document.getElementById('multiplier');
console.log(buy);
let multiple = false;
//console.log(multiple);

buy.addEventListener('click', multiple = true);





const items = document.querySelectorAll('.boxImg');
const nbSlide = items.length;
const next = document.querySelector('.right');
const previous = document.querySelector('.left');

let count = 0;

function nextSlide() {
  items[count].classList.remove('active');

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active')
  console.log(count);

}
next.addEventListener('click', nextSlide)


function previousSlide() {
  items[count].classList.remove('active');

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  items[count].classList.add('active')
  console.log(count);

}
previous.addEventListener('click', previousSlide)

