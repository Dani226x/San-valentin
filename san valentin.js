document.getElementById('btnAceptar').addEventListener('click', function() {
    // Oculta el botón y muestra la celebración
    document.getElementById('btnAceptar').style.display = 'none';
    document.getElementById('celebracion').classList.remove('hidden');

    // Animación de corazones y flores
    const corazones = document.querySelector('.corazones');
    const flores = document.querySelector('.flores');

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const corazon = document.createElement('span');
            corazon.innerHTML = '❤️';
            corazon.style.position = 'absolute';
            corazon.style.left = Math.random() * 100 + '%';
            corazon.style.fontSize = Math.random() * 2 + 1 + 'rem';
            corazon.style.animation = `flotar ${Math.random() * 3 + 2}s infinite`;
            corazones.appendChild(corazon);
        }, i * 200);
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const flor = document.createElement('span');
            flor.innerHTML = ['🌸', '🌺', '💐'][Math.floor(Math.random() * 3)];
            flor.style.position = 'absolute';
            flor.style.left = Math.random() * 100 + '%';
            flor.style.fontSize = Math.random() * 2 + 1 + 'rem';
            flor.style.animation = `flotar ${Math.random() * 3 + 2}s infinite`;
            flores.appendChild(flor);
        }, i * 300);
    }
});

