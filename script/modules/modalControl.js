import {overlay} from './modalRender.js';

const headerLinkCall = document.querySelector('.header__link-call');

headerLinkCall.addEventListener('click', () => {
  overlay.classList.add('overlay_active');
});
