/* add nav style on scroll */
document.addEventListener('DOMContentLoaded', function () {
  let observer = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) {
      document.querySelector('.top-nav').classList.add('top-nav--bg');
      document.querySelector('.top-nav__logo').classList.add('top-nav__logo--shrink');
    } else {
      document.querySelector('.top-nav').classList.remove('top-nav--bg');
      document.querySelector('.top-nav__logo').classList.remove('top-nav__logo--shrink');
    }
  }, { threshold: [0.01] });
  observer.observe(document.querySelector('.intro') || document.querySelector('.angebot-intro'));
});

/**
 * Show and hide the hamburger menu
 */
function showHamburgerMenu() {
  document.getElementsByTagName('body')[0].classList.add('body__no-scroll');
  let overlay = document.querySelector('.ham-menu');
  overlay.style.transform = "translateY(0)";
}

function closeHamburgerMenu() {
  document.getElementsByTagName('body')[0].classList.remove('body__no-scroll');
  let overlay = document.querySelector('.ham-menu');
  overlay.style.transform = "translateY(-110%)";
}

