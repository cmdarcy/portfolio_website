const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const skillsLogos = document.querySelectorAll('[data-skills-logo]')

skillsLogos.forEach(logo => {
    logo.addEventListener('mouseenter', (ev) => {
        console.log(`You moused into the ${ev.target.querySelector('span')} logo!`);
        let label = ev.target.querySelector('span');
        if (label) {
            ev.target.querySelector('span').style.display = 'block';
        }
    });
    logo.addEventListener('mouseleave', (ev) => {
        console.log(`You moused out of the ${ev.target.querySelector('span')} logo!`);
        let label = ev.target.querySelector('span');
        if (label) {
            ev.target.querySelector('span').style.display = 'none';
        }
    });
})
