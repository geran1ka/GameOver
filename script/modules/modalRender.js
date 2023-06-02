import { closeModal } from './burger.js';
import {page} from './const.js';
import {createElement} from './function.js';
import {scrollController} from './scrollControl.js';

export const overlayModal = createElement('div', {
  className: 'overlay-modal',
}, {
  parent: page,
  append: createElement('div', {
    className: 'modal',
  }, {
    appends: [
      createElement('div', {
        className: 'modal__container',
      }, {
        appends: [
          createElement('h2', {
            className: 'modal__title',
            textContent: 'Заказать звонок',
          }),
          createElement('form', {
            className: 'modal__form',
            id: 'modal__form',
            method: 'get',

          }, {
            appends: [
              createElement('div', {
                className: 'modal__wrapper',
              }, {
                appends: [
                  createElement('label', {
                    className: 'modal__label',
                    textContent: 'Имя',
                    htmlFor: 'modalName',
                  }),
                  createElement('input', {
                    className: 'modal__input',
                    id: 'modalName',
                    name: 'modalName',
                    required: 'required',
                  }),
                ],
              }),
              createElement('div', {
                className: 'modal__wrapper',
              }, {
                appends: [
                  createElement('label', {
                    className: 'modal__label',
                    textContent: 'Телефон',
                    htmlFor: 'modalPhone',
                  }),
                  createElement('input', {
                    className: 'modal__input',
                    id: 'modalPhone',
                    name: 'modalPhone',
                    required: 'required',
                  }),
                ],
              }),
              createElement('button', {
                className: 'modal__submit',
                textContent: 'Позвонить мне',
                type: 'submit',
              }, {
                cb(elem) {
                  elem.addEventListener('submit', e => {
                    e.preventDefault();
                  });
                },
              },
              ),
            ],
          }),
        ],
      }),
      createElement('button', {
        className: 'modal__close',
        innerHTML: `
          <svg class="modal__close-svg" width="42" height="42" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <rect y="38.4407" width="54.3632" height="5.03363" rx="2" transform="rotate(-45 0 38.4407)"/>
            <rect x="3.55957" width="54.3632" height="5.03363" rx="2" transform="rotate(45 3.55957 0)"/>
          </svg>
        `,
      }),
    ],
  }),
  cb(elem) { // закртыие модального окна
    elem.addEventListener('click', (e) => {
      const target = e.target;
      if (elem === target || target.closest('.modal__close')) {
        overlayModal.classList.remove('overlay-modal_active');
        scrollController.enabledScroll();
      }
    });
  },
});


