"use strict"

const navToggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

navToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  console.log('click');
})

navToggle.addEventListener('click', (e) => {
    if (e.target.closest('.hamburger')) {
      e.target.closest('.hamburger').classList.toggle('is-active');
    }
  });