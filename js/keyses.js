let keyses = document.querySelectorAll('.keys__item')
let activeKeyse = document.querySelector('.activekeys')



keyses.forEach((keys) => {
    keys.addEventListener('mouseenter', (current) => {

        let childrenImageElement = current.srcElement.children[1].children[0]
        let childrenBtnElement = current.srcElement.children[2].children[1].querySelector('svg path')
        keyses.forEach(keyss => {
            let childrenImageElement = keyss.querySelector('.keys__item__image > img')
            keyss.classList.remove('activekeys')
            childrenImageElement.classList.remove('active__keys__image')
            if (!keyss.classList[1]) {
                document.querySelector('.keys__item__link button svg').style.fill = '#000 !important'
            }
        })
        current.srcElement.classList.add('activekeys')
        childrenImageElement.classList.add('active__keys__image')


        keyses.forEach(keyses => {
            if (keyses.classList[1] === 'activekeys') {
                let svgPathActive = document.querySelector('.activekeys button svg path')
                let svgPath = document.querySelectorAll('.keys__item__link button svg path')
                svgPath.forEach((path)=>{
                    path.style.fill = '#000'
                })
                svgPathActive.style.fill = '#fff'
            } else{
                let svgPathActive = document.querySelector('.activekeys button svg path')
                let svgPath = document.querySelectorAll('.keys__item__link button svg path')
                svgPath.forEach((path)=>{
                    path.style.fill = '#000'
                })
                svgPathActive.style.fill = '#fff'
            }
        })
    })
})