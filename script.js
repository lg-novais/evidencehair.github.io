const linksInternos = document.querySelectorAll(".header_container ul li a[href^='#']")
console.log(linksInternos)

function scrollToSection(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    console.log(section)
}


linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})