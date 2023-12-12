function scrollSuave(){
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
            console.log(section)
        }
        
        
        linksInternos.forEach((link) => {
            link.addEventListener('click', scrollToSection)
        })
    }
}
scrollSuave()

function initAnimaScroll(){
    const sections = document.querySelectorAll('.js .js-scroll');
    const windowHeight = window.innerHeight * 0.6
    if(sections.length){
        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowHeight;
                if(sectionTop < 0){
                    section.classList.add('ativo')
                }
            })
        }
        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }
}
initAnimaScroll()