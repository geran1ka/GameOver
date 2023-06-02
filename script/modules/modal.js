import {duration, nav, navMobile, top} from './const.js';
import {overlayModal} from './modalRender.js';
import {closeMenu} from './navigation.js';
import {scrollController} from './scrollControl.js';


export const openModal = () => {
  if (nav.classList.contains('visible') || navMobile.classList.contains('visible')) closeMenu();

  overlayModal.classList.add('visible');

  let startTime = NaN;

  const animateOpenModal = (timestamp) => {
    startTime ||= timestamp;
    const progress = (timestamp - startTime) / duration;

    overlayModal.style.visibility = 'visible';
    overlayModal.style.opacity = progress;
    overlayModal.style.transform = `translateY(${-top + top * progress}%)`;
    if (progress < 1) {
      requestAnimationFrame(animateOpenModal);
    } else {
      startTime = NaN;
      scrollController.disabledScroll();
    }
  };
  requestAnimationFrame(animateOpenModal);
};


export const closeModal = () => {
  let startTime = NaN;
  scrollController.enabledScroll();
  const animateCloseModal = (timestamp) => {
    startTime ||= timestamp;
    const progress = (timestamp - startTime) / duration;

    overlayModal.style.visibility = 'visible';
    overlayModal.style.opacity = progress;
    overlayModal.style.transform = `translateY(${-top * progress}%)`;
    if (progress < 1) {
      requestAnimationFrame(animateCloseModal);
    } else {
      overlayModal.style = '';
      startTime = NaN;
      overlayModal.classList.remove('visible');
    }
  };
  requestAnimationFrame(animateCloseModal);
};
