// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Suavizar el desplazamiento al hacer clic en los enlaces de navegación
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de desvanecimiento de imágenes en la sección de servicios
    const services = document.querySelectorAll('.service');

    const fadeInOnScroll = () => {
        const windowHeight = window.innerHeight;
        services.forEach(service => {
            const serviceTop = service.getBoundingClientRect().top;
            if (serviceTop < windowHeight) {
                service.classList.add('fade-in');
            }
        });
    };

    // Llama a la función al cargar la página y al hacer scroll
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();
});
