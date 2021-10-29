'use strict';

/*==================== MENU SHOW Y HIDDEN ====================*/
//Traemos elementos del HTML
const navMenu = document.querySelector('.js-nav-menu');

const navToggle = document.querySelector('.js-nav-toggle');

const navClose = document.querySelector('.js-nav-close');

/*===== MENU SHOW =====*/
/* Validamos si (IF) la constante existe */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validamos si (IF) la constante existe */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
//Traemos elementos del HTML
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.querySelector('.js-nav-menu');
  // Cuando hacemos click en cada nav__link, eliminamos la clase show-menu
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));
/*==================== ACCORDION SKILLS ====================*/

/*==================== QUALIFICATION TABS ====================*/

/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
