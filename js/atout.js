// Fonction pour changer d'onglet
function showTab(tabName) {
    // Cache tous les contenus d'onglets
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Désactive tous les boutons d'onglets
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Active l'onglet sélectionné
    document.getElementById(tabName).classList.add('active');
    
    // Active le bouton correspondant
    event.target.classList.add('active');
}

// Animation des barres de progression au chargement
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
            }
        });
    });

    const progressBars = document.querySelectorAll('.skill-progress');
    progressBars.forEach(bar => observer.observe(bar));
});