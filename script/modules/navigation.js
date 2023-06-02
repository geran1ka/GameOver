import {duration, headerOverlay, nav, navMobile, top} from './const.js';
import {isWindowWidthMobile} from './function.js';
import {closeModal} from './modal.js';
import {overlayModal} from './modalRender.js';
import {scrollController} from './scrollControl.js';


export const closeMenu = () => {
  let startTime = NaN;
  scrollController.enabledScroll();
  const animateCloseMenu = (timestamp) => {
    startTime ||= timestamp;

    const progress = (timestamp - startTime) / duration;
    const elem = isWindowWidthMobile() ? navMobile : nav;

    headerOverlay.style.opacity = 1 - progress;
    elem.style.transform = `scale(${1 - progress}) translateY(${-top * progress}%`;

    if (progress < 1) {
      requestAnimationFrame(animateCloseMenu);
    } else {
      elem.style = '';
      headerOverlay.style = '';
      elem.classList.remove('visible');

      startTime = NaN;
    }
  };
  requestAnimationFrame(animateCloseMenu);
};

export const openMenu = () => {
  let startTime = NaN;
  if (overlayModal.classList.contains('visible')) closeModal();

  const elem = isWindowWidthMobile() ? navMobile : nav;
  console.log('elem: ', elem);

  elem.classList.add('visible');

  const animateOpenMenu = (timestamp) => {
    startTime ||= timestamp;
    const progress = (timestamp - startTime) / duration;

    headerOverlay.style.visibility = 'visible';
    headerOverlay.style.opacity = progress;

    elem.style.pointerEvents = 'none';
    elem.style.visibility = 'visible';
    elem.style.transform = `scale(${progress}) translateY(${-top + top * progress}%`;

    if (progress < 1) {
      requestAnimationFrame(animateOpenMenu);
    } else {
      startTime = NaN;
      elem.style.pointerEvents = '';
      scrollController.disabledScroll();
    }
  };
  requestAnimationFrame(animateOpenMenu);
};

