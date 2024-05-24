document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('section');

    const galaxy = document.getElementById('galaxy');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop + 50,
                behavior: 'smooth'
            });
        });
    });

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });



    function generateStars() {
        const numStars = 4000;
    
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDuration = `${Math.random() * 2 + 0.5}s`;
    
            galaxy.appendChild(star);
        }
    }
    
    generateStars();
});