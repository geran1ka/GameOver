const headerMain = document.querySelector('.header');
const burger = document.querySelector('.burger');
const navList = document.querySelector('.navigation__list');
const navMenu = document.querySelector('.navigation');
const headerOverlay = document.querySelector('.header__overlay');

burger.addEventListener('click', e => {
  if (burger.classList.contains('burger_active')) {
    burger.classList.remove('burger_active');
    navList.classList.remove('navigation__list_active');
    navMenu.classList.remove('navigation_active');
    headerOverlay.classList.remove('header__overlay_active');
  } else {
    burger.classList.add('burger_active');
    navList.classList.add('navigation__list_active');
    navMenu.classList.add('navigation_active');
    headerOverlay.classList.add('header__overlay_active');
  }
});

headerMain.addEventListener('click', e => {
  const target = e.target;
  console.log('target: ', target);

  if (target.closest('header') && target !== burger) {
    burger.classList.remove('burger_active');
    navList.classList.remove('navigation__list_active');
    navMenu.classList.remove('navigation_active');
    headerOverlay.classList.remove('header__overlay_active');
  }
});
