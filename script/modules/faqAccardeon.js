const faqItems = document.querySelectorAll('.faq__item');
const faqItemBtn = document.querySelectorAll('.faq__item-btn');

faqItemBtn.forEach((btn, indexBtn) => {
  btn.addEventListener('click', () => {
    faqItemBtn.forEach((items, indexItems) => {
      if (indexBtn === indexItems) {
        faqItems[indexItems].classList.toggle('faq__item_active');
      } else {
        faqItems[indexItems].classList.remove('faq__item_active');
      }
    })
  });
})