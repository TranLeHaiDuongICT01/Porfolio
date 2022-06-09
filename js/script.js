$(document).ready(function () {
    const menuControl = document.querySelector('.font-awesome-logo')
    const aboutImage = document.querySelector('.about-me__image')
    const skill = document.querySelector('.my-skill')
    const navList = document.querySelector('.nav__list')
    const home = document.querySelector('#home')
    const header = document.querySelector('.header')

    navList.addEventListener('click', function (e) {
        e.preventDefault()
        if (e.target.classList.contains('nav__link')) {
            const id = e.target.getAttribute('href')
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
            hideSidebar()
        }
    })

    new Typed('#intro-span', {
        strings: ['hard coder', 'programmer', 'developer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var offset_nav = $('.header').offset().top;
    if (offset_nav !== 0) {
        header.classList.add('header-scroll')
    } else {
        header.classList.remove('header-scroll')
    }

    const headerCb = (entries) => {
        const [entry] = entries
        if (!entry.isIntersecting) {
            header.classList.add('header-scroll')
        } else header.classList.remove('header-scroll')
    }

    const headerObserver = new IntersectionObserver(
        headerCb, {
        root: null,
        threshold: 0.99
    }
    )

    headerObserver.observe(home)
    const aboutImageWidth = aboutImage.getBoundingClientRect().height + 50
    const avatarCb = (entries) => {
        const [entry] = entries
        if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
            $('.about-me__image').addClass('transform-image')
        } else $('.about-me__image').removeClass('transform-image')
    }

    const avatarObserver = new IntersectionObserver(
        avatarCb, {
        root: null,
        threshold: 0.5,
        rootMargin: `0px 0px 0px ${aboutImageWidth}px`
    }
    )
    avatarObserver.observe(aboutImage)

    const skillCb = (entries) => {
        const [entry] = entries
        if (!entry.isIntersecting) {
            $('.progress-line').removeClass('progress-line-animation');
            $('.progess-line-span').removeClass('progess-line-span-animation')
        } else {
            $('.progress-line').addClass('progress-line-animation');
            $('.progess-line-span').addClass('progess-line-span-animation')
        }
    }
    const skillObserver = new IntersectionObserver(
        skillCb, {
        root: null,
        threshold: 0.25
    }
    )

    skillObserver.observe(skill)


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