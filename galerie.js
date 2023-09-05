$(document).ready(function() {
  // Fonction pour afficher toutes les images
  function afficherToutesLesImages() {
      $('.image-item').show();
  }

  // Filtrer les images lorsque l'utilisateur clique sur un bouton de catégorie
  $('.btn').click(function() {
      const filter = $(this).data('filter');
      if (filter === 'all') {
          afficherToutesLesImages(); // Afficher toutes les images lorsque "Toutes" est sélectionné
      } else {
          $('.image-item').hide();
          $(`.${filter}`).show();
      }
  });

  // Afficher toutes les images par défaut lors du chargement de la page
  afficherToutesLesImages();
});
