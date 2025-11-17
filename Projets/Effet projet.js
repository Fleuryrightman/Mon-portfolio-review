// Sélectionne toutes les images de projets
const projectImages = document.querySelectorAll('main section img');

projectImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.3s ease';
        img.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = 'none';
    });
});
