import {headerLinkCall} from './const.js';
import {overlay} from './modalRender.js';


headerLinkCall.addEventListener('click', () => {
  overlay.classList.add('overlay_active');
});
