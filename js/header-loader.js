// Charge le header dynamiquement dans toutes les pages
fetch('../Header/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Erreur de chargement du header:', error));