const coin = document.querySelector("#coin");
const button = document.querySelector("#flip");
const status = document.querySelector("#status");

function deferFn(callback, ms) {
  setTimeout(callback, ms);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var x = document.getElementById("tails");
var z = document.getElementById("heads");

function teaseCoin() {
  coin.setAttribute("class", "");
  deferFn(function () {
    coin.setAttribute("class", "animate-tease");
  }, 100);
}

function flipCoin() {
  coin.setAttribute("class", "");
  const random = getRandomInt(5);
  const randomh = getRandomInt(5);
  if (random > 2) {
    string = "heads";
  } else {
    string = "tails";
  }

  if (randomh === 0) {
    x.style.backgroundImage = "url(images/fw.png)";
  }
  if (randomh === 1) {
    x.style.backgroundImage = "url(images/cw.png)";
  }
  if (randomh === 2) {
    x.style.backgroundImage = "url(images/hr.png)";
  }
  if (randomh === 3) {
    x.style.backgroundImage = "url(images/pr.png)";
  }
  if (randomh === 4) {
    x.style.backgroundImage = "url(images/pr.png)";
  }

  const result = string;
  deferFn(function () {
    coin.setAttribute("class", "animate-" + result);
  }, 100);
}

teaseCoin();
button.addEventListener("click", flipCoin);
