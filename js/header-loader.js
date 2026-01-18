// Charge le header dynamiquement dans toutes les pages
fetch('../Header/header.html')
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
    let currentPage = window.location.pathname.split('/').pop();
    
    // Si la page est vide (racine du site), utilise index.html
    if (!currentPage || currentPage === '') {
        currentPage = 'index.html';
    }
    
    // Configuration des pages et leurs titres
    const pageConfig = {
        'index.html': { nav: 'nav-accueil', breadcrumb: 'Qui je suis ?', showBreadcrumb: false },
        '': { nav: 'nav-accueil', breadcrumb: 'Qui je suis ?', showBreadcrumb: false },
        'formation.html': { nav: 'nav-formation', breadcrumb: 'Ma formation' },
        'experiences.html': { nav: 'nav-experiences', breadcrumb: 'Mes expériences professionnelles', parentNav: 'nav-actions' },
        'stages.html': { nav: 'nav-stages', breadcrumb: 'Mes stages professionnels', parentNav: 'nav-actions' },
        'sae.html': { nav: 'nav-sae', breadcrumb: 'Mes SAE', parentNav: 'nav-actions' },
        'competence.html': { nav: 'nav-competences', breadcrumb: 'Mes compétences' },
        'atout.html': { nav: 'nav-atouts', breadcrumb: 'Mes atouts' },
        'loisir.html': { nav: 'nav-loisirs', breadcrumb: 'Mes loisirs' }
    };
    
    // Récupère la configuration de la page actuelle
    const config = pageConfig[currentPage];
    
    // Si la config n'existe pas, on sort de la fonction
    if (!config) {
        console.warn(`Page "${currentPage}" non trouvée dans la configuration`);
        return;
    }
    
    // Met à jour le lien actif dans la navigation
    const activeLink = document.getElementById(config.nav);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Si la page fait partie d'un sous-menu, active aussi le menu parent
    if (config.parentNav) {
        const parentLink = document.getElementById(config.parentNav);
        if (parentLink) {
            parentLink.classList.add('active');
        }
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