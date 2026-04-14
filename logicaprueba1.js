const container = document.getElementById('particulas-container');

function crearParticula() {
    const particula = document.createElement('div');
    const tipos = ['💚', '⭐', '💜', '✨'];
    
    particula.innerHTML = tipos[Math.floor(Math.random() * tipos.length)];
    particula.classList.add('particula');
    

    particula.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 20 + 15;
    particula.style.fontSize = size + 'px';
    

    const duracion = Math.random() * 3 + 3;
    particula.style.animationDuration = duracion + 's';
    
    container.appendChild(particula);

    setTimeout(() => {
        particula.remove();
    }, duracion * 1000);
}

setInterval(crearParticula, 200);