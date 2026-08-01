// JavaScript source code
// ======================================
// SOCIALVERTEXX
// Premium Website JavaScript
// ======================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 80) {
        header.style.background = "rgba(8,17,31,.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
    } else {
        header.style.background = "rgba(8,17,31,.92)";
        header.style.boxShadow = "none";
    }

});

// Simple fade-in animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);

});

console.log("✅ SocialVertexX website loaded successfully!");