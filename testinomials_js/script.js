var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.mySwiper', {
    // Your existing Swiper configuration options
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true, // Enable loop
  });

  // Auto slide every 2 seconds
  setInterval(function () {
    mySwiper.slideNext();
  }, 4000);
});