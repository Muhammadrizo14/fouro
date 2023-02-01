const imagesSlides = (direction) => {
    let currentSlide = document.querySelector('.slides-container__slide--active')
    let digitalSkill = document.querySelectorAll('.digital__skill')
    let agentSlide = document.querySelectorAll('.agent__slide')
    let skill = document.querySelectorAll('.digital__skill')
    let tagSlide = document.querySelectorAll('.tag__slide')
    let client = document.querySelectorAll('.client')
    let agentButton = document.querySelectorAll('.agent__button')
    let emptyBlock = document.querySelectorAll('.empty_block')
    let clientSlide = document.querySelector('.feed__back__slide')
    let footerSlide = document.querySelector('.footer__slide')
    let keys__slide = document.querySelectorAll('.keys__slide')
    let nextSlide;
    let lastest = false

    direction === 'down' ?
        nextSlide = currentSlide.nextElementSibling :
        nextSlide = currentSlide.previousElementSibling





    if (nextSlide) {




        // -------------- ANIMATIONS -----------------------
        // Обший timeline
        const tl = gsap.timeline({
            default: {ease: easing},
            onComplete: function () {
                currentSlide.classList.remove('index')
            }
        })

        const KeysTl = gsap.timeline({
            default: {ease: easing},
            onComplete: function () {
                currentSlide.classList.remove('index')
            }
        })


        KeysTl.from('.keys__slide', 0.5, {
            yPercent: 100
        })

        const tagTimeLine = gsap.timeline({
            default: {ease: easing},
            onComplete: function () {
                currentSlide.classList.remove('index')
            }
        })


        tl.from(nextSlide.querySelector('.digital__info__subtitle'), 0.5, {
            yPercent: 100
        })


        // Buttons
        agentButton.forEach((el) => {
            tl.from(el, 0.3, {
                yPercent: 30,
                opacity: 0
            }, '-=0.6')
        })

        digitalSkill.forEach((skill) => {
            tl.from(skill, 0.5, {
                yPercent: -100,
                delay: -0.5
            })
        })
        tl.from('.agent__title', 0.5, {
            yPercent: 100,
            delay: -0.5
        })


        const clientTimeline = gsap.timeline({
            default: {ease: easing},
            onComplete: function () {
                currentSlide.classList.remove('index')
            }
        })

        clientTimeline.from('.client__slide__title', 0.3, {
            yPercent: 60,
        })


        // Skills Tags animations
        tagTimeLine.fromTo(tagSlide, 0.3, {
            yPercent: 60,
        }, {
            yPercent: 0,
        }, '-=0.3')


        const AnalizeTl = gsap.timeline({
            default: {ease: easing},
            onComplete: function () {
                currentSlide.classList.remove('index')
            }
        })

        AnalizeTl.from('.analize__empty_block', 0.3, {
            xPercent: 100
        })
        AnalizeTl.from('.analize__title', 0.3, {
            y: 100
        }, '-=0.3')
        AnalizeTl.from('.analize__subtitle', 0.3, {
            y: 100
        }, '-=0.3')


        skill.forEach((el) => {
            tagTimeLine.fromTo(el, 0.3, {
                y: 300,
                opacity: 0,
                delay: 0.01
            }, {
                y: 0,
                opacity: 1,
                delay: 0.01
            }, '-=0.2')
        })


        // Develop site animations
        const developSite = gsap.timeline({
            default: {ease: easing},
            onComplete: function () {
                currentSlide.classList.remove('index')
            }
        })

        developSite.from('.develop__site__title', 0.3, {
            y: 100,
        })
        developSite.from('.develop__site__subtitle', 0.3, {
            y: 100,
        }, '-=0.3')
        developSite.from('.develop__site__button', 0.3, {
            y: 100,
        }, '-=0.3')
        developSite.from('.develop__site__button', 0.3, {
            yPercent: 50,
        }, '-=0.3')
        developSite.from('.develop__site__block', 0.3, {
            x: 100,
        }, '-=0.3')


        // Agent slide animations
        const agent = gsap.timeline({
            default: {ease: easing},
            onComplete: function () {
                currentSlide.classList.remove('index')
            }
        })
        agent.fromTo(agentSlide, 0.3, {
            yPercent: 1,
        }, {
            yPercent: 0,
        }, '-=0.3')


        // Feed back slide animations
        const FeedBack = gsap.timeline({
            default: {ease: easing}
        })
        FeedBack.from('.feed__back__image', 0.3, {
            x: 100,
            opacity: 0
        })
        FeedBack.from('.feed__back__form__title', 0.3, {
            y: 100,
            opacity: 0
        }, '-=0.3')
        FeedBack.from('.feed__back__form__input__name', 0.3, {
            y: 100,
            opacity:0
        }, '-=0.3')
        FeedBack.from('.feed__back__form__input__phone', 0.3, {
            y: 100,
            opacity:0
        }, '-=0.2')
        FeedBack.from('.feed__back__form__input__comment', 0.3, {
            y: 100,
            opacity:0
        }, '-=0.2')
        FeedBack.from('.info', 0.3, {
            y: 100,
            opacity:0
        }, '-=0.2')

        const Footer = gsap.timeline({
            default: {ease: easing}
        })
        Footer.from('.footer__wrap', 0.3, {
            y: 100,
            opacity: 0
        })




        if (nextSlide.classList[2] === 'footer__slide') {
            currentSlide.classList.add('slides-container__slide--activeWithFooter')
            nextSlide.classList.add('slides-container__slide--active')
        } else {
            clientSlide.classList.remove('slides-container__slide--activeWithFooter')
            footerSlide.classList.remove('slides-container__slide--active')
        }


        currentSlide.classList.remove('slides-container__slide--active')
        nextSlide.classList.add('slides-container__slide--active')

        if (FeedBackSlide.classList[3] === 'slides-container__slide--active') {
            console.log('black')
            slidesWrapper.style.backgroundColor = '#000'
            slidesWrapper.style.backgroundImage = 'none'
            wrapper.style.backgroundColor = '#000'
        } else if (FooterSlide.classList[3] === 'slides-container__slide--active') {
            slidesWrapper.style.backgroundColor = '#000'
            slidesWrapper.style.backgroundImage = 'none'
            wrapper.style.backgroundColor = '#000'
        } else {
            slidesWrapper.style.backgroundColor = '#191C27'
            slidesWrapper.style.backgroundImage = 'url("../img/background.png")'
            wrapper.style.backgroundColor = '#191C27'
        }


    }
}