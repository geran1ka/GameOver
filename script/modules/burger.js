import {nav, navigationList, page} from './const.js';
import {createElement} from './function.js';


export const createBurgerMenu = () => {
  const burger = createElement('button', {
    className: 'navigation__menu',
    innerHTML: '<span class="navigation__line"></span>',
  });

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('navigation__menu_active');
    navigationList.classList.toggle('navigation__list_active');
  });

  nav.prepend(burger);

  return burger;
};
/*
const burger = createBurgerMenu();


page.addEventListener('click', e => {
  const target = e.target;

  if (!(navigationList.classList.contains('navigation__list_active') &&
    target === navigationList) && target !== burger) {
    navigationList.classList.remove('navigation__list_active');
    burger.classList.remove('navigation__menu_active');
  }
});

*/
