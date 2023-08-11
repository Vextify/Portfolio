window.document.onkeydown = function (e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
    lightbox_close2();
    lightbox_close3();
  }
};

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById("light").style.display = "block";
  document.getElementById("fade").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("alexa");
  document.getElementById("light").style.display = "none";
  document.getElementById("fade").style.display = "none";
  lightBoxVideo.pause();
}

function lightbox_open2() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo2");
  window.scrollTo(0, 0);
  document.getElementById("light2").style.display = "block";
  document.getElementById("fade2").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close2() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo2");
  document.getElementById("light2").style.display = "none";
  document.getElementById("fade2").style.display = "none";
  lightBoxVideo.pause();
}

function lightbox_open3() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo3");
  window.scrollTo(0, 0);
  document.getElementById("light3").style.display = "block";
  document.getElementById("fade3").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close3() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo3");
  document.getElementById("light3").style.display = "none";
  document.getElementById("fade3").style.display = "none";
  lightBoxVideo.pause();
}
