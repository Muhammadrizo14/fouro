//Links
let linkKeys = document.querySelector('.linkKeys')
let linkAgent = document.querySelector('.linkAgent')
let linkServices = document.querySelector('.linkServices')
let linkComment = document.querySelector('.linkComment')

//Slides
let keysSlide = document.querySelector('.keys__slide ')
let agentSlide = document.querySelector('.agent__slide  ')
let developSlide = document.querySelector('.develop__slide   ')
let feedBackSlide = document.querySelector('.feed__back__slide')


AllSlides.forEach((slide) => {
    linkKeys.addEventListener('click', () => {
        slide.classList.remove('slides-container__slide--active')
        keysSlide.classList.add('slides-container__slide--active')
        slidesWrapper.style.backgroundColor = '#191C27'
        slidesWrapper.style.backgroundImage = 'url("../img/background.png")'
        wrapper.style.backgroundColor = '#191C27'
    })
    linkAgent.addEventListener('click', () => {
        slide.classList.remove('slides-container__slide--active')
        agentSlide.classList.add('slides-container__slide--active')
        slidesWrapper.style.backgroundColor = '#191C27'
        slidesWrapper.style.backgroundImage = 'url("../img/background.png")'
        wrapper.style.backgroundColor = '#191C27'
    })
    linkServices.addEventListener('click', () => {
        slide.classList.remove('slides-container__slide--active')
        developSlide.classList.add('slides-container__slide--active')
        slidesWrapper.style.backgroundColor = '#191C27'
        slidesWrapper.style.backgroundImage = 'url("../img/background.png")'
        wrapper.style.backgroundColor = '#191C27'
    })
    linkComment.addEventListener('click', () => {
        slide.classList.remove('slides-container__slide--active')
        feedBackSlide.classList.add('slides-container__slide--active')
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
    })
})