// Swiper Slider
var swiper = new Swiper(".slider-content", {
  slidesPerView: 4,
  centeredSlides: false,
  gragCursor: "true",
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Accordion

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
} 

items.forEach(item => item.addEventListener('click', toggleAccordion));



