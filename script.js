document.addEventListener("DOMContentLoaded", () => {
    
    // === 1. LÓGICA DEL CARRUSEL ===
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    
    let currentIndex = 0;
    const totalSlides = slides.length; // Guardará el total de 6 imágenes

    // Función que mueve el carrusel multiplicando el ancho por el índice actual
    const moveToSlide = (index) => {
        track.style.transform = `translateX(-${index * 100}%)`;
    };

    // Botón Siguiente
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides; // Si llega a la 6, vuelve a la 0
        moveToSlide(currentIndex);
    });

    // Botón Anterior
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Si baja de 0, va a la 5
        moveToSlide(currentIndex);
    });


    // === 2. ANIMACIÓN AL HACER SCROLL (FADE IN) ===
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearanceOptions = {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            // Agrega la clase CSS que activa la transición suave
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Deja de observarlo una vez animado
        });
    }, appearanceOptions);

    fadeElements.forEach(element => {
        appearanceObserver.observe(element);
    });

});
