export  default function initAnimaScroll(){
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