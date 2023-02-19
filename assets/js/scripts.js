/* add nav style on scroll */
document.addEventListener('DOMContentLoaded', function () {
  var observer = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) {
      document.querySelector('.top-nav').classList.add('top-nav--bg');
    } else {
      document.querySelector('.top-nav').classList.remove('top-nav--bg');
    }
  }, { threshold: [0] });
  observer.observe(document.querySelector('.intro'));
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

