var intro = new Swiper("#main-banner", {
  spaceBetween: 30,
  effect: "fade",
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: "#main-banner .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000
  },
});

var brand= new Swiper(".brand-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
});