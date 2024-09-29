let pError = document.getElementById('pShowE');

document.querySelectorAll('.right-arrow').forEach(button => {
    button.addEventListener('click', function() {
        const timelineItem = this.closest('.timeline-item');
        
        // Iniciar la transición
        timelineItem.style.transform = 'translateX(300px)'; // Mueve el evento 300px a la derecha
        timelineItem.style.opacity = '0'; // Cambia la opacidad a 0

        // Esperar 1 segundo (duración de la transición) antes de ocultar el elemento
        setTimeout(() => {
            timelineItem.style.display = 'none'; // Oculta el elemento al final
        }, 1000); // Esperar 1 segundo
    });
});

document.querySelectorAll('.left-arrow').forEach(button => {
    button.addEventListener('click', function() {
        const timelineItem = this.closest('.timeline-item');
        const nextItem = timelineItem.nextElementSibling; // Obtiene el evento siguiente
        
        if (nextItem) { // Verifica si hay un evento siguiente
            nextItem.style.display = 'flex'; // Asegúrate de que esté visible
            nextItem.style.transform = 'translateX(-300px)'; // Mueve el evento desde la izquierda
            nextItem.style.opacity = '0'; // Cambia la opacidad a 0

            // Reinicia el estilo para la animación
            setTimeout(() => {
                nextItem.style.transition = 'transform 1s ease, opacity 1s ease'; // Reactiva la transición
                nextItem.style.transform = 'translateX(0)'; // Restaura la posición
                nextItem.style.opacity = '1'; // Restaura la opacidad
            }, 10); // Espera un pequeño tiempo para aplicar la animación

            // Para que no se oculte
            nextItem.style.display = 'flex'; // Muestra el elemento al final
        } else {
            pError.textContent = 'Use la otra flecha para para avanzar al siguiente elemento, esta es solo para retroceder';
            setTimeout(() => {pError.textContent = ''}, 3000);
        }
    });
});
