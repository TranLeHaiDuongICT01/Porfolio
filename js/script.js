$(document).ready(function () {
    var introSpan = document.getElementById('intro-span')
    var typed = new Typed('#intro-span', {
        strings: ['hard coder', 'programmer', 'developer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var menuControl = document.querySelector('.font-awesome-logo')
    var aboutImage = document.querySelector('.about-me__image')

    var offset_nav = $('.header').offset().top;
    if (offset_nav !== 0) {
        $('.header').addClass('header-scroll')
    } else {
        $('.header').removeClass('header-scroll')
    }
    var avatar_offset = $('.about-me__image').offset().top + aboutImage.height / 3 * 2;
    
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st === 0) {
            $('.header').removeClass('header-scroll')
        } else {
            $('.header').addClass('header-scroll')
        }
        if (st + window.innerHeight < avatar_offset) {
            $('.about-me__image').addClass('transform-image')
        } else $('.about-me__image').removeClass('transform-image')

    })
    menuControl.addEventListener('click', () => {
        if (menuControl.classList.contains('fa-bars')) {
            menuControl.classList.remove('fa-bars')
            menuControl.classList.add('fa-close')
        } else {
            menuControl.classList.remove('fa-close')
            menuControl.classList.add('fa-bars')
        }

        if (aboutImage.classList.contains('transform-image')) {
            $('.about-me__image').removeClass('transform-image')
        } else {
            $('.about-me__image').addClass('transform-image')
        }
    })
});