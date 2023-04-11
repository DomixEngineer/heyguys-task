const accordions = document.getElementsByClassName('single-accordion')
const inactiveClassName = 'single-accordion__body--inactive'
const openAccordionImgSrc = './src/svg/accordion_open_btn.png'
const closeAccordionImgSrc = './src/svg/accordion_exit_btn.png'

if (accordions && accordions.length > 0) {
    for (let x = 0; x < accordions.length; x++) {
        let singleAccordion = accordions[x]
        let singleAccordionIcon = singleAccordion.children[0].children[0]
        let singleAccordionIconImg = singleAccordion.children[0].children[0].children[0]
        singleAccordionIcon.addEventListener('click', (event) => {
            let body = event.target.parentNode.parentNode.nextElementSibling
            let isInactive = body.classList.contains(inactiveClassName)
            if (isInactive) {
                body.classList.remove(inactiveClassName)
                singleAccordionIconImg.src = closeAccordionImgSrc;
            } else {
                body.classList.add(inactiveClassName)
                singleAccordionIconImg.src = openAccordionImgSrc;
            }
        })
    }
} 