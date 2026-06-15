// Smooth scroll

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Card animation on scroll

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });
});

cards.forEach(card => {
    observer.observe(card);
});
