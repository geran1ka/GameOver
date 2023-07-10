import {btnBurger, overlayHeader} from './constJQuery.js';
import {overlayModal} from './modalRender.js';
import {scrollController} from './scrollControl.js';


export const openMenuA = (menu) => {
  overlayHeader.show();
  btnBurger.addClass('burger_active');
  menu.slideDown();
  menu.css({display: 'flex'});
  scrollController.disabledScroll();
};

export const closeMenuA = (menu) => {
  overlayHeader.hide();
  btnBurger.removeClass('burger_active');
  overlayModal.classList.contains('visible') ? scrollController.disabledScroll() : scrollController.enabledScroll();
  menu.slideUp();
};


