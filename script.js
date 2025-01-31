//SIDENAV

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 30px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}


document.addEventListener('DOMContentLoaded', () => {
  const burgerImg = document.querySelector('.burger-icon img');

  if (burgerImg) {
    const updateImageOnScroll = () => {
      const viewportWidth = window.innerWidth;
      const scrollY = window.scrollY;

      // Récupérer l'URL actuelle de l'image
      const currentSrc = burgerImg.src;

      // Extraire la partie après 'image/'
      const baseUrl = currentSrc.split('image/')[0] + 'image/';
      let newImage = '';

      if (viewportWidth <= 800 && scrollY >= 216) {
        newImage = 'emoji_burger_flashred.png';
      } else {
        newImage = 'emoji_burger.png';
      }

      // Mettre à jour uniquement la partie de l'image
      if (currentSrc.split('image/')[1] !== newImage) {
        burgerImg.src = baseUrl + newImage;
      }
    };

    // Écoute les événements de scroll et de redimensionnement
    window.addEventListener('scroll', updateImageOnScroll);
    window.addEventListener('resize', updateImageOnScroll);
  }
});