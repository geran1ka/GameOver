import {burger, header, headerLinkCall, headerLinkCallMobile, nav, navMobile} from './const.js';
import {overlayModal} from './modalRender.js';
import {isWindowWidthMobile} from './function.js';
import {closeModal, openModal} from './modal.js';
import {closeMenu, openMenu} from './navigation.js';

headerLinkCall.addEventListener('click', () => {
  openModal();
  console.log('openModalBtn');
  burger.classList.remove('burger_active');
  headerLinkCall.setAttribute('disabled', 'disabled');
});

headerLinkCallMobile.addEventListener('click', () => {
  openModal();
  console.log('openModalBtnMob');

  burger.classList.remove('burger_active');
  headerLinkCallMobile.setAttribute('disabled', 'disabled');
});


burger.addEventListener('click', e => {
  if (burger.classList.contains('burger_active')) {
    burger.classList.remove('burger_active');
    closeMenu();
    console.log('closeMenuBtn');
  } else {
    burger.classList.add('burger_active');
    openMenu();
    console.log('openMenuBtn');
  }
});


header.addEventListener('click', (e) => {
  const menu = isWindowWidthMobile() ? navMobile : nav;
  const btnModal = isWindowWidthMobile() ? headerLinkCallMobile : headerLinkCall;
  console.log(e.target);
  if (menu.classList.contains('visible') && e.target !== burger && e.target.closest('.header') === header) {
    closeMenu();
    console.log('closeMenuTar');

    burger.classList.remove('burger_active');
  }

  if (overlayModal.classList.contains('visible') && e.target !== btnModal && e.target.closest('.header') === header) {
    isWindowWidthMobile() ? '' : closeModal();
    headerLinkCall.removeAttribute('disabled');
    headerLinkCallMobile.removeAttribute('disabled');
    console.log('closeModalTar');
  }
});

