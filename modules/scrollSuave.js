export default function scrollSuave(){
    const linksInternos = document.querySelectorAll(".header_container ul li a[href^='#']")

    if(linksInternos.length){
        function scrollToSection(event){
            event.preventDefault()
            const href = event.currentTarget.getAttribute("href")
            const section = document.querySelector(href)
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
        scrollToSection()
        
        linksInternos.forEach((link) => {
            link.addEventListener('click', scrollToSection)
        })
    }
}
