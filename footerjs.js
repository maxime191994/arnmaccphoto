  // Fonction pour afficher le footer lorsque l'utilisateur fait défiler jusqu'au bas de la page
  function showFooterOnScroll() {
    const footer = document.querySelector('.hidden-footer');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const bodyHeight = document.body.offsetHeight;

    // Détermine à quelle distance du bas de la page l'utilisateur est
    if (scrollY + windowHeight >= bodyHeight - 10) {
      footer.classList.remove('hidden-footer');
    } else {
      footer.classList.add('hidden-footer');
    }
  }

  // Ajoutez un gestionnaire d'événement de défilement pour appeler la fonction lorsque l'utilisateur fait défiler la page
  window.addEventListener('scroll', showFooterOnScroll);
