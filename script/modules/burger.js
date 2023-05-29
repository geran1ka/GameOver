import {createElement} from './function.js';

const nav = document.querySelector('.header__navigation');
const navigationList = document.querySelector('.navigation__list');
console.log('navigationList: ', navigationList);

export const createBurgerMenu = () => {
  const burger = createElement('button', {
    className: 'navigation__menu',
    innerHTML: '<span class="navigation__line"></span>',
  });

  burger.addEventListener('click', () => {
    burger.classList.toggle('navigation__menu_active');
    navigationList.classList.toggle('navigation__list_active');
});


  nav.prepend(burger);
};


createBurgerMenu(nav, 'header__navigation_active');
