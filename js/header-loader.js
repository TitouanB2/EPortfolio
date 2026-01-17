// Charge le header dynamiquement dans toutes les pages
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
        
        // Détecte la page actuelle et met à jour le header
        updateActiveNav();
    })
    .catch(error => console.error('Erreur de chargement du header:', error));

// Fonction pour mettre à jour la navigation active
function updateActiveNav() {
    // Récupère le nom de la page actuelle
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Configuration des pages et leurs titres
    const pageConfig = {
        '../index.html': { nav: 'nav-accueil', breadcrumb: 'Accueil', showBreadcrumb: false },
        '../Pages/formation.html': { nav: 'nav-formation', breadcrumb: 'Ma formation' },
        '../Pages/competence.html': { nav: 'nav-competences', breadcrumb: 'Compétences' },
        '../Pages/projets.html': { nav: 'nav-projets', breadcrumb: 'Projets' },
        '../Pages/loisirs.html': { nav: 'nav-loisirs', breadcrumb: 'Mes loisirs' },
        '../Pages/contact.html': { nav: 'nav-contact', breadcrumb: 'Contact' }
    };
    
    // Récupère la configuration de la page actuelle
    const config = pageConfig[currentPage] || pageConfig['index.html'];
    
    // Met à jour le lien actif dans la navigation
    const activeLink = document.getElementById(config.nav);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Met à jour le fil d'Ariane
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');
    const breadcrumbSeparator = document.getElementById('breadcrumb-separator');
    
    if (config.showBreadcrumb === false) {
        // Cache le fil d'Ariane sur la page d'accueil
        if (breadcrumbCurrent) breadcrumbCurrent.style.display = 'none';
        if (breadcrumbSeparator) breadcrumbSeparator.style.display = 'none';
    } else {
        // Affiche et met à jour le fil d'Ariane
        if (breadcrumbCurrent) {
            breadcrumbCurrent.textContent = config.breadcrumb;
            breadcrumbCurrent.style.display = 'inline';
        }
        if (breadcrumbSeparator) {
            breadcrumbSeparator.style.display = 'inline';
        }
    }
}