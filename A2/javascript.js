
/*logic for page changing */
const tabs = document.querySelectorAll("[data-tab-target]")
const tabContents = document.querySelectorAll("[data-tab-content]")

tabs.forEach(tab => 
{
    tab.addEventListener("click", ()=>
    {
        const target = document.querySelector(tab.dataset.tabTarget)

        /*remove active class from all tabs to hide old tabs */
        tabContents.forEach(tabContent => tabContent.classList.remove('active'))

        /*add active class to target tab to style in css for display */
        target.classList.add('active')
    })

})

/*logic for carousel image change*/
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button =>
{
    button.addEventListener("click", () => 
    {
        /*if next button pressed, move to next slide else move to prev*/ 
        const offset = button.dataset.carouselButton === "next" ? 1: -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        /*select current active slide from carousel */
        const activeSlide = slides.querySelector("[data-active]")

        /*convert slides to an array to be referenced */
        let newIndex = [...slides.children].indexOf(activeSlide) + offset

        /* if at first slide going prev, go to last slide */
        if (newIndex < 0) newIndex = slides.children.length - 1

        /* if at first slide going next, go to first slide */
        if (newIndex >= slides.children.length) newIndex = 0

        /*set newly selected slide as active slide */
        slides.children[newIndex].dataset.active = true
        /*set previosly active slide as inactive */
        delete activeSlide.dataset.active
    })
})