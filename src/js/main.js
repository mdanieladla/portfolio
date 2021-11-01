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
//Traemos elementos del HTML
// const skillsContent = document.querySelectorAll('.js-skills');

// const skillsHeader = document.querySelectorAll('.js-skills-header');

// function toggleSkills(ev) {
//   let itemClass = ev.currentTarget;
//   // console.log(itemClass);
//   const clicked = itemClass.parentNode;
//   for (let index = 0; index < skillsHeader.length; index++) {
//     if (itemClass === skillsHeader[index]) {
//       skillsContent[index].classList.toggle('skills__close');
//       skillsHeader[index].classList.toggle('skills__header');
//     } else {
//       skillsContent[index].classList.add('skills__open');
//     }
//   }
// }

// for (const item of skillsHeader) {
//   item.addEventListener('click', toggleSkills);
// }
//    NO FUNCIONAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA    //

/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
//Con esto hacemos que en el menú se quede sombreado en color morado claro la sección en que estamos.
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.querySelector('.header');
  //Cuando el scroll es mayor que 80 vh, añadimos la clase scroll-header al tag de header
  if (this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  //Cuando el scroll es mayor que 560vh, añadimos la clase show-scroll al tag <a> con la clase scroll-top
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
// FUNCIONA PERO NO ME COGE LAS VARIABLES DEL SASS ....... ¿DEJARLO O NO DEJARLO?
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

//scroll reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social--icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 200 });
sr.reveal('.about__description', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.section__general--title', {});
sr.reveal('.section__general--subtitle', { delay: 200 });
sr.reveal('.skills__data', { interval: 200 });

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', { interval: 200 });
