import {burger, header, headerLinkCall, headerLinkCallMobile, nav, navMobile} from './const.js';
import {overlayModal} from './modalRender.js';
import {isWindowWidthMobile} from './function.js';
import {closeModal, openModal} from './modal.js';
// import {closeMenu, openMenu} from './navigation.js';
import {scrollController} from './scrollControl.js';
import { btnBurger, navigation, navigationMobile } from './constJQuery.js';
import { closeMenuA, openMenuA } from './burger.js';




// btnBurger.on('click', (e) => {
//   const menu = isWindowWidthMobile() ? navigationMobile : navigation;
//   if (e.target.closest('.burger_active')) {
//     btnBurger.removeClass('burger_active');
//     overlayHeader.slideUp();
//     scrollController.enabledScroll();
//   } else {
//     btnBurger.addClass('burger_active');
//     overlayHeader.slideDown();
//     scrollController.disabledScroll();
//   }
//   menu.slideToggle();
// });

$('body').on('click', (e) => {
  const menu = isWindowWidthMobile() ? navigationMobile : navigation;
  console.log('menu: ', menu);

  if (e.target === btnBurger[0]) {
    if (e.target.closest('.burger_active') && e.target === btnBurger[0]) {
      closeMenuA(menu);
    } else {
      openMenuA(menu);
      closeModal();
      headerLinkCall.removeAttribute('disabled');
    }
  } else {
    $(window).outerWidth() < 940 ? closeMenuA(menu) : '';
  }
});

console.log();

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


// burger.addEventListener('click', e => {
//   if (burger.classList.contains('burger_active')) {
//     burger.classList.remove('burger_active');
//     closeMenu();
//     console.log('closeMenuBtn');
//   } else {
//     burger.classList.add('burger_active');
//     openMenu();
//     console.log('openMenuBtn');
//   }
// });


// header.addEventListener('click', (e) => {
//   const menu = isWindowWidthMobile() ? navMobile : nav;
//   const btnModal = isWindowWidthMobile() ? headerLinkCallMobile : headerLinkCall;
//   console.log(e.target);
//   if (menu.classList.contains('visible') && e.target !== burger && e.target.closest('.header') === header) {
//     closeMenu();
//     console.log('closeMenuTar');

//     burger.classList.remove('burger_active');
//   }

//   if (overlayModal.classList.contains('visible') && e.target !== btnModal && e.target.closest('.header') === header) {
//     isWindowWidthMobile() ? '' : closeModal();
//     headerLinkCall.removeAttribute('disabled');
//     headerLinkCallMobile.removeAttribute('disabled');
//     console.log('closeModalTar');
//   }
// });

