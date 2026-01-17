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
        'index.html': { nav: 'nav-accueil', breadcrumb: 'Accueil', showBreadcrumb: false },
        '': { nav: 'nav-accueil', breadcrumb: 'Accueil', showBreadcrumb: false },
        'formation.html': { nav: 'nav-formation', breadcrumb: 'Ma formation' },
        'competences.html': { nav: 'nav-competences', breadcrumb: 'Compétences' },
        'projets.html': { nav: 'nav-projets', breadcrumb: 'Projets' },
        'loisirs.html': { nav: 'nav-loisirs', breadcrumb: 'Mes loisirs' },
        'loisir.html': { nav: 'nav-loisirs', breadcrumb: 'Mes loisirs' }, // Ajout pour gérer les deux noms
        'contact.html': { nav: 'nav-contact', breadcrumb: 'Contact' }
    };
    
    // Récupère la configuration de la page actuelle
    // Si la page n'existe pas dans la config, utilise la config par défaut (accueil)
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