var slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var mybgs = document.getElementById('mybgs');
  var mytext = document.getElementById('mytext');
  var bgslides = mybgs.getElementsByClassName("mySlides");
  var textslides = mytext.getElementsByClassName("mySlides");
  var dots = mytext.getElementsByClassName("dot");
  if (n > bgslides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = bgslides.length}
    for (i = 0; i < bgslides.length; i++) {
      bgslides[i].style.display = "none";
      textslides[i].style.display = "none";

    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    bgslides[slideIndex-1].style.display = "block";
    textslides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(function(){
    plusSlides(1)
  },3000)
}

function StartSlide(){
  
showSlides(slideIndex);
}