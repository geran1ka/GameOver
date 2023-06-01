import {burger, header, headerLinkCall} from './const.js';
import {scrollController} from './scrollControl.js';
import {overlayModal} from './modalRender.js';
import {closeMenu, openMenu} from './burger.js';


headerLinkCall.addEventListener('click', () => {
  overlayModal.classList.add('overlay-modal_active');
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
    requestAnimationFrame(closeMenu);
    scrollController.enabledScroll();
    overlayModal.classList.remove('overlay-modal_active');
  }
});

