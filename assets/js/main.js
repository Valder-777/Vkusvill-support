// Swiper Slider
let sliders = document.querySelectorAll(".slider");
if (sliders.length > 0) {
  var swiper = new Swiper(".slider", {
    gragCursor: "true",
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      991: {
        slidesPerView: 2.5,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    }, 
    pagination: {
      el: ".swiper-pagination",
      
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
  });
}  


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



