import {headerOverlay, nav, navigationList} from './const.js';

const duration = 500;
let startTime = NaN;
const top = 120;

export const openMenu = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / duration;
  headerOverlay.style.visibility = 'visible';
  headerOverlay.style.opacity = progress;
  navigationList.style.pointerEvents = 'none';
  if (window.innerWidth > 640) {
    navigationList.style.visibility = 'visible';
    navigationList.style.opacity = progress;
    navigationList.style.transform = `translateY(${-top + top * progress}%)`;
  } else {
    nav.style.visibility = 'visible';
    nav.style.opacity = progress;
    nav.style.transform = `translateY(${-top + top * progress}%)`;
  }

  if (progress < 1) {
    requestAnimationFrame(openMenu);
  } else {
    startTime = NaN;
    navigationList.style.pointerEvents = '';
  }
};

export const closeMenu = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / duration;
  headerOverlay.style.opacity = 1 - progress;
  if (window.innerWidth > 640) {
    navigationList.style.opacity = 1 - progress;
    navigationList.style.transform = `translateY(${-top * progress}%)`;
  } else {
    nav.style.opacity = 1 - progress;
    nav.style.transform = `translateY(${-top * progress}%)`;
  }

  if (progress < 1) {
    requestAnimationFrame(closeMenu);
  } else {
    window.innerWidth > 640 ?
      navigationList.style.visibility = 'hidden' :
      nav.style.visibility = 'hidden';
    headerOverlay.style.visibility = '';
    startTime = NaN;
  }
};

const resetStyles = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 940) {
    navigationList.style = '';
  } else if (windowWidth < 640) {
    navigationList.style = '';
  } else {
    nav.style = '';
  }
};

window.addEventListener('resize', resetStyles);
