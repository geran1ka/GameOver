import {faqItemBtn, faqItems} from './const.js';


faqItemBtn.forEach((btn, indexBtn) => {
  btn.addEventListener('click', () => {
    faqItemBtn.forEach((items, indexItems) => {
      if (indexBtn === indexItems) {
        faqItems[indexItems].classList.toggle('faq__item_active');
      } else {
        faqItems[indexItems].classList.remove('faq__item_active');
      }
    });
  });
});
