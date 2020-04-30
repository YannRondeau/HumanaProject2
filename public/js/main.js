


const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('#side-menu');
  const navLinks = document.querySelectorAll('#side-menu a');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

  
    navLinks.forEach((link, index) => {

      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.9s ease forwards`;
      }
     
    });
  });

 
}

navSlide();


var slide = new Array("images/pic1.JPG", "images/pic2.JPG", "images/pic3.JPG", "images/pic4.JPG", "images/pic5.JPG", "images/pic6.JPG");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}



/*$(document).ready(function() {

  $('#fb span').hide();

  $("#fb i").on('mouseover', function() {
    $("#fb span",this).show();
  });
  $("#yt i").hover(function() {
    $("#yt span").show();
  });
  $("#sc i").hover(function() {
    $("#sc span").show();
  });
  $("#ig i").hover(function() {
    $("#ig span").show();
  });
});*/