function openLightbox(n) {
  document.getElementById("lightbox").style.display = "block";
  var photo = document.getElementsByClassName("lightbox__content--slides");
  photo[n-1].style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  var photo = document.getElementsByClassName("lightbox__content--slides");
  for (var i = 0; i < photo.length; i++) {
    photo[i].style.display = "none";
  }
}
