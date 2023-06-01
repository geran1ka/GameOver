import {burger, header, headerLinkCall, headerLinkCallMobile} from './const.js';
import {scrollController} from './scrollControl.js';
import {overlayModal} from './modalRender.js';
import {closeMenu, closeModal, openMenu, openModal} from './burger.js';
import {isWindowWidthMobile} from './function.js';


headerLinkCall.addEventListener('click', () => {
  requestAnimationFrame(openModal);
  burger.classList.remove('burger_active');
  scrollController.disabledScroll();
  if (window.innerWidth < 940) requestAnimationFrame(closeMenu);
});

headerLinkCallMobile.addEventListener('click', () => {
  requestAnimationFrame(openModal);
  burger.classList.remove('burger_active');
  scrollController.disabledScroll();
  if (window.innerWidth < 940) requestAnimationFrame(closeMenu);
});

burger.addEventListener('click', e => {
  if (burger.classList.contains('burger_active')) {
    burger.classList.remove('burger_active');
    scrollController.enabledScroll();
    requestAnimationFrame(closeMenu);
  } else {
    burger.classList.add('burger_active');
    overlayModal.classList.remove('overlay-modal_active');
    scrollController.disabledScroll();
    requestAnimationFrame(openMenu);
  }
});

header.addEventListener('click', e => {
  const target = e.target;
  if (target !== burger && target !== headerLinkCall && target.closest('.header') === header) {
    burger.classList.remove('burger_active');
    if (window.innerWidth < 940) requestAnimationFrame(closeMenu);
    isWindowWidthMobile() ? '' : scrollController.enabledScroll();
    isWindowWidthMobile() ? '' : requestAnimationFrame(closeModal);
  }
});

