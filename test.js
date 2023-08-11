var black = "rgb(0, 0, 0)";
var red = "rgb(255, 0, 0)";

function toggleColor() {
  var x = document.getElementById("demo");
  var currentColor = window.getComputedStyle(x, null).color;

  if (currentColor === black) {
    x.style.color = red;
  } else {
    x.style.color = black;
  }
}
