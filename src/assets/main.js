// main.js
Reveal.initialize({
    transition: 'slide',  // Type de transition entre les diapositives
    controls: true,       // Afficher les contrôles de navigation
    progress: true,       // Afficher la barre de progression
    history: true,        // Permet de naviguer dans l'historique du navigateur
    center: true,         // Centrer les diapositives
    // Autres options que tu souhaites ajouter
});

Reveal.initialize({
    pdfSeparateFragments: false, // Combine les fragments sur une même page
    pdfMaxPagesPerSlide: 1,      // Une seule diapositive par page
    pdfPageHeight: 1050,         // Hauteur de la page en pixels (facultatif)
    pdfPageWidth: 1485,          // Largeur de la page en pixels (facultatif)
    pdfViewer: true,              // Ouvre le fichier PDF dans un viewer
});
