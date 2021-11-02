"use strict";const navMenu=document.querySelector(".js-nav-menu"),navToggle=document.querySelector(".js-nav-toggle"),navClose=document.querySelector(".js-nav-close");navToggle&&navToggle.addEventListener("click",()=>{navMenu.classList.add("show-menu")}),navClose&&navClose.addEventListener("click",()=>{navMenu.classList.remove("show-menu")});const navLink=document.querySelectorAll(".nav__link");function linkAction(){document.querySelector(".js-nav-menu").classList.remove("show-menu")}navLink.forEach(e=>e.addEventListener("click",linkAction));const skillsContent=document.querySelectorAll(".js-skills"),skillsHeader=document.querySelectorAll(".js-skills-header");function toggleSkills(){let e=this.parentNode.className;for(let e=0;e<skillsContent.length;e++)skillsContent[e].className="skills__content skills__close js-skills";"skills__content skills__close js-skills"===e&&(this.parentNode.className="skills__content skills__open js-skills")}skillsHeader.forEach(e=>{e.addEventListener("click",toggleSkills)});const sections=document.querySelectorAll("section[id]");function scrollActive(){const e=window.pageYOffset;sections.forEach(t=>{const s=t.offsetHeight,l=t.offsetTop-50;let o=t.getAttribute("id");e>l&&e<=l+s?document.querySelector(".nav__menu a[href*="+o+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+o+"]").classList.remove("active-link")})}function scrollHeader(){const e=document.querySelector(".header");this.scrollY>=80?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}function scrollUp(){const e=document.getElementById("scroll-up");this.scrollY>=560?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}window.addEventListener("scroll",scrollActive),window.addEventListener("scroll",scrollHeader),window.addEventListener("scroll",scrollUp);const themeButton=document.getElementById("theme-button"),darkTheme="dark-theme",iconTheme="uil-sun",selectedTheme=localStorage.getItem("selected-theme"),selectedIcon=localStorage.getItem("selected-icon"),getCurrentTheme=()=>document.body.classList.contains(darkTheme)?"dark":"light",getCurrentIcon=()=>themeButton.classList.contains("uil-sun")?"uil-moon":"uil-sun";selectedTheme&&(document.body.classList["dark"===selectedTheme?"add":"remove"](darkTheme),themeButton.classList["uil-moon"===selectedIcon?"add":"remove"]("uil-sun")),themeButton.addEventListener("click",()=>{document.body.classList.toggle(darkTheme),themeButton.classList.toggle("uil-sun"),localStorage.setItem("selected-theme",document.body.classList.contains(darkTheme)?"dark":"light"),localStorage.setItem("selected-icon",themeButton.classList.contains("uil-sun")?"uil-moon":"uil-sun")});const sr=ScrollReveal({origin:"top",distance:"80px",duration:2e3,reset:!0});sr.reveal(".home__title",{}),sr.reveal(".button",{delay:200}),sr.reveal(".home__img",{delay:400}),sr.reveal(".home__social--icon",{interval:200}),sr.reveal(".about__img",{}),sr.reveal(".about__subtitle",{delay:200}),sr.reveal(".about__description",{delay:400}),sr.reveal(".section__general--title",{}),sr.reveal(".section__general--subtitle",{delay:200}),sr.reveal(".skills__data",{interval:200}),sr.reveal(".portfolio__img",{interval:200});