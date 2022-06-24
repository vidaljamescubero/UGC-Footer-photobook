window.ugcFooterContainer = document.querySelector(".ugc-footer-container");
window.ugcFooter = document.querySelector('.ugc-footer')

window.addEventListener('resize', () => {
    if (ugcFooterContainer.offsetWidth !== ugcFooter.offsetWidth) {
        let diff = ugcFooterContainer.offsetWidth / ugcFooter.offsetWidth;
        let height = ugcFooter.offsetHeight;
        let heightValue = `${diff * height}px`;

        ugcFooter.style.cssText = `
            transform: scale(${diff});
            transform-origin: top left;
        `

        ugcFooterContainer.style.cssText = `
            height: ${heightValue};
        `
    }
})

if (ugcFooterContainer.offsetWidth !== ugcFooter.offsetWidth) {
    let diff = ugcFooterContainer.offsetWidth / ugcFooter.offsetWidth;
    let height = ugcFooter.offsetHeight;
    let heightValue = `${diff * height}px`
    console.log(heightValue)

    ugcFooter.style.cssText = `
        transform: scale(${diff});
        transform-origin: top left;
    `

    ugcFooterContainer.style.cssText = `
        height: ${heightValue};
    `
}
