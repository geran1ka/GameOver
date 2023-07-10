import { btnBurger, overlayHeader } from "./constJQuery.js";
import { scrollController } from "./scrollControl.js";



export const openMenuA = (menu) => {
  console.log('menu: ', menu);
  btnBurger.addClass('burger_active');
  menu.slideDown();
  menu.css({display: 'flex'})
  overlayHeader.slideDown();
  scrollController.disabledScroll();
};

export const closeMenuA = (menu) => {
  btnBurger.removeClass('burger_active');
  overlayHeader.slideUp();
  scrollController.enabledScroll();
  menu.slideUp();
}