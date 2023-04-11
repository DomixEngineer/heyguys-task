const accordions = document.getElementsByClassName('single-accordion');
if (accordions && accordions.length > 0) {
    for (let x = 0; x < accordions.length; x++) {
        let singleAccordion = accordions[x]
        let singleAccordionIcon = singleAccordion.children[0].children[0]
        singleAccordionIcon.addEventListener('click', (el) => {
            console.log(el.parentElement)
        })
    }
} 