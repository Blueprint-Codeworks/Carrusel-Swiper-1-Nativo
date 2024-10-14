var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20, // Espacio entre slides
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      200: {
        slidesPerView: 1, // 1 slide por vista en móviles
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2, // 2 slides por vista en pantallas medianas
        spaceBetween: 50,

      },
      1024: {
        slidesPerView: 2, // 3 slides por vista en pantallas grandes
        spaceBetween: 50,
      },
    },
  });
  