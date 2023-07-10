import {burger, headerLinkCall, headerLinkCallMobile} from './const.js';
import {overlayModal} from './modalRender.js';
import {getMenu, resetStyles} from './function.js';
import {closeModal, openModal} from './modal.js';
import {btnBurger} from './constJQuery.js';
import {closeMenuA, openMenuA} from './burger.js';

$('body').on('click', (e) => {
  const menu = getMenu();
  console.log('menu: ', menu);

  if (e.target === btnBurger[0]) {
    if (e.target.closest('.burger_active') && e.target === btnBurger[0]) {
      closeMenuA(menu);
    } else {
      overlayModal.classList.contains('visible') ? closeModal() : '';
      headerLinkCall.removeAttribute('disabled');
      openMenuA(menu);
    }
  } else {
    $(window).outerWidth() < 940 ? closeMenuA(menu) : '';
  }
});


headerLinkCall.addEventListener('click', () => {
  openModal();
  burger.classList.remove('burger_active');
  headerLinkCall.setAttribute('disabled', 'disabled');
});

headerLinkCallMobile.addEventListener('click', () => {
  openModal();
  burger.classList.remove('burger_active');
  headerLinkCallMobile.setAttribute('disabled', 'disabled');
});

window.addEventListener('resize', resetStyles);

