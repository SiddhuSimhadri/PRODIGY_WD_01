// script.js
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-item a');

    // GSAP animations
    gsap.from(".navbar", { duration: 1, y: -100, ease: "bounce" });
    gsap.from(".section", { duration: 1, opacity: 0, y: 100, stagger: 0.2 });

    window.addEventListener('scroll', function () {
        let scrollY = window.pageYOffset;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.clientHeight;
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navbar.classList.add('scrolled');
                navbar.style.background = getComputedStyle(section).backgroundColor;

                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Parallax effect
            const parallaxElements = section.querySelectorAll('.parallax');
            parallaxElements.forEach(parallax => {
                let offset = window.pageYOffset;
                parallax.style.transform = `translateY(${offset * 0.5}px)`;
            });
        });
    });
});
