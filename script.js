var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    speed: 320,

    mousewheel: {
        invert: false
    },

    paginatin: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullers: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
