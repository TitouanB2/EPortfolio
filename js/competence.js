// Gestion des onglets de compétences
const compButtons = document.querySelectorAll('.comp-btn');
const compContents = document.querySelectorAll('.comp-content');

compButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Récupérer la compétence à afficher
        const targetComp = button.getAttribute('data-comp');
        
        // Retirer la classe active de tous les boutons et contenus
        compButtons.forEach(btn => btn.classList.remove('active'));
        compContents.forEach(content => content.classList.remove('active'));
        
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');
        
        // Afficher le contenu correspondant
        document.getElementById(targetComp).classList.add('active');
        
        // Scroll vers le haut du contenu
        document.getElementById('competences-content').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// ========================================
// LIGHTBOX POUR LES IMAGES
// ========================================

// Créer la lightbox une seule fois au chargement de la page
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img class="lightbox-content" src="" alt="">
    <div class="lightbox-caption"></div>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('.lightbox-content');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const lightboxClose = lightbox.querySelector('.lightbox-close');

// Fonction pour ouvrir la lightbox
function openLightbox(imgElement) {
    lightboxImg.src = imgElement.src;
    lightboxCaption.textContent = imgElement.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Empêcher le scroll
}

// Fonction pour fermer la lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Réactiver le scroll
}

// Ajouter les événements de clic sur TOUTES les images
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner toutes les images dans les cards
    const images = document.querySelectorAll('.ac-card img');
    
    images.forEach(img => {
        // Ajouter un curseur pointer pour indiquer que c'est cliquable
        img.style.cursor = 'pointer';
        
        // Ajouter l'événement de clic
        img.addEventListener('click', () => {
            openLightbox(img);
        });
    });
    
    // Fermer la lightbox au clic sur la croix
    lightboxClose.addEventListener('click', closeLightbox);
    
    // Fermer la lightbox au clic en dehors de l'image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Fermer la lightbox avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});