$(document).ready(function () {
    const menuControl = document.querySelector('.font-awesome-logo')
    const aboutImage = document.querySelector('.about-me__image')
    const skill = document.querySelector('.my-skill')
    const navLinks = document.querySelectorAll('.nav__link')

    navLinks.forEach(function (nav) {
        nav.addEventListener('click', function (e) {
            e.preventDefault()
            const id = nav.getAttribute('href')
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
            hideSidebar()
        })
    })

    var typed = new Typed('#intro-span', {
        strings: ['hard coder', 'programmer', 'developer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var offset_nav = $('.header').offset().top;
    if (offset_nav !== 0) {
        $('.header').addClass('header-scroll')
    } else {
        $('.header').removeClass('header-scroll')
    }
    var avatar_offset = $('.about-me__image').offset().top + aboutImage.height / 3 * 2;
    var skill_offet = $('.my-skill').offset().top - skill.clientHeight;
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

        if (st < skill_offet) {
            $('.progress-line').removeClass('progress-line-animation');
            $('.progess-line-span').removeClass('progess-line-span-animation')
        } else {
            $('.progress-line').addClass('progress-line-animation');
            $('.progess-line-span').addClass('progess-line-span-animation')
        }

    })

    const showSidebar = () => {
        menuControl.classList.remove('fa-bars')
        menuControl.classList.add('fa-close')
        $('.nav').removeClass('nav-animation')
    }

    const hideSidebar = () => {
        menuControl.classList.remove('fa-close')
        menuControl.classList.add('fa-bars')
        $('.nav').addClass('nav-animation')
    }

    menuControl.addEventListener('click', () => {
        if (menuControl.classList.contains('fa-bars')) {
            showSidebar()
        } else {
            hideSidebar()
        }

        aboutImage.classList.toggle('transform-image')
    })
});