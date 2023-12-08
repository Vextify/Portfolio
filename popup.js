window.document.onkeydown = function (e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
    lightbox_close2();
    lightbox_close3();
    lightbox_close4();
  }
};

function lightbox_open() {
  window.scrollTo(0, 0);
  document.getElementById("light").style.display = "block";
  document.getElementById("fade").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close() {
  document.getElementById("light").style.display = "none";
  document.getElementById("fade").style.display = "none";
  lightBoxVideo.pause();
}

function lightbox_open2() {
  window.scrollTo(0, 0);
  document.getElementById("light2").style.display = "block";
  document.getElementById("fade2").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close2() {
  document.getElementById("light2").style.display = "none";
  document.getElementById("fade2").style.display = "none";
  lightBoxVideo.pause();
}

function lightbox_open3() {
  window.scrollTo(0, 0);
  document.getElementById("light3").style.display = "block";
  document.getElementById("fade3").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close3() {
  document.getElementById("light3").style.display = "none";
  document.getElementById("fade3").style.display = "none";
  lightBoxVideo.pause();
}

function lightbox_open4() {
  window.scrollTo(0, 0);
  document.getElementById("light4").style.display = "block";
  document.getElementById("fade4").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close4() {
  document.getElementById("light4").style.display = "none";
  document.getElementById("fade4").style.display = "none";
  lightBoxVideo.pause();
}
