// JavaScript
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // Estetään oletustoiminto
        const target = document.querySelector(e.target.getAttribute('href')); // Kohde-elementti
        target.scrollIntoView({ behavior: 'smooth' }); // Sujuva vieritys
    });
});

// Koodi generoitu ChatGPT -tekoälyn avulla.