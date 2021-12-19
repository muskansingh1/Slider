var slideIndex = 1;
var i = 1
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

window.onscroll = function() {myFunction()};

function myFunction() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        var div = document.createElement('div');
        var container = document.getElementsByClassName('HelloWorld-container')
        container[0].appendChild(div)
        i++;
        div.textContent = 'Hello world' + i;
    }
  
}