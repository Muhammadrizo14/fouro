const showNextSlide = () => {

    imagesSlides('down')
}
const showPrevSlide = () => {
    imagesSlides('up')
}



if (window.innerWidth >= 768) {
    window.addEventListener('wheel', (e) => {
        let delta = -e.deltaY;
        if (delta > 0) {
            if (helperInput.value == '1') {
                helperInput.value = 0
                showPrevSlide()
                setTimeout(() => {
                    helperInput.value = 1
                }, 500)

            }
        } else {
            if (helperInput.value == '1') {
                helperInput.value = 0
                showNextSlide()
                setTimeout(() => {
                    helperInput.value = 1
                }, 500)
            }
        }
    })
} else {
    document.addEventListener('swiped-left', () => {
        showNextSlide();
    })
    document.addEventListener('swiped-right', () => {
        showPrevSlide();
    })
}


const tl = gsap.timeline({
    default: {ease: easing},
})
tl.from('.digital__info__title', 0.5, {
    yPercent: 60,
    opacity: 0
})
    .from('.digital__info__title--red', 0.5, {
        yPercent: 60,
        opacity: 0
    })
    .from('.digital__info__subtitle', 0.5, {
        yPercent: 60,
        opacity: 0
    }, '-=.4')

//slidesWrapper
