document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('show');
  });
});

// Image Slider

let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
  moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  moveToPrevSlide();
});

function updateSlidePosition() {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveToNextSlide() {
  if (currentSlide === totalSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (currentSlide === 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide--;
  }
  updateSlidePosition();
}

setInterval(() => {
  moveToNextSlide();
}, 5000);

updateSlidePosition();



// formulario

function submitForm(event) {
  event.preventDefault();
  
  var form = document.getElementById('contactForm');
  var loading = document.getElementById('loading');
  
  loading.style.display = 'block';
  
  setTimeout(function() {
    form.reset();
    loading.style.display = 'none';
    alert('Mensagem enviada com sucesso!');
  }, 2000); 
}
