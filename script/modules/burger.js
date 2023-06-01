import {headerOverlay, nav, navMobile} from './const.js';
import { isWindowWidthMobile } from './function.js';
import { overlayModal } from './modalRender.js';

const duration = 500;
let startTime = NaN;
const top = 130;


export const openMenu = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / duration;
  const elem = isWindowWidthMobile() ? navMobile : nav;

  headerOverlay.style.visibility = 'visible';
  headerOverlay.style.opacity = progress;

  elem.style.pointerEvents = 'none';
  elem.style.visibility = 'visible';
  elem.style.transform = `scale(${progress}) translateY(${-top + top * progress}%)`;

  if (progress < 1) {
    requestAnimationFrame(openMenu);
  } else {
    startTime = NaN;
    elem.style.pointerEvents = '';
  }
};

export const closeMenu = (timestamp) => {
  startTime ||= timestamp;

  const progress = (timestamp - startTime) / duration;
  const elem = isWindowWidthMobile() ? navMobile : nav;

  headerOverlay.style.opacity = 1 - progress;
  elem.style.transform = `scale(${1 - progress}) translateY(${top * progress}%)`;

  if (progress < 1) {
    requestAnimationFrame(closeMenu);
  } else {
    elem.style = '';
    headerOverlay.style = '';
    startTime = NaN;
  }
};

export const openModal = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / duration;

  overlayModal.style.visibility = 'visible';
  overlayModal.style.opacity = progress;
  overlayModal.style.transform = `translateY(${-top + top * progress}%)`;

  if (progress < 1) {
    requestAnimationFrame(openModal);
  } else {
    startTime = NaN;
  }
};

export const closeModal = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / duration;

  overlayModal.style.visibility = 'visible';
  overlayModal.style.opacity = progress;
  overlayModal.style.transform = `translateY(${-top * progress}%)`;

  if (progress < 1) {
    requestAnimationFrame(closeModal);
  } else {
    overlayModal.style = '';
    startTime = NaN;
  }
};

