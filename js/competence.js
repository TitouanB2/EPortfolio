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