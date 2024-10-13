// Script para hacer la galería deslizante
document.querySelectorAll('.imagenes-deslizables').forEach(galeria => {
    galeria.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            galeria.scrollBy(300, 0); // Mueve la galería hacia la derecha
        } else {
            galeria.scrollBy(-300, 0); // Mueve la galería hacia la izquierda
        }
    });
});