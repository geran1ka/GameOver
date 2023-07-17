const bookingTitle = document.querySelector('.booking__title');
const fieldset = document.querySelector('.form__box-grid');
const inputTel = document.querySelector('.form__input_tel');
const telMask = new Inputmask('+7 (999)-999-99-99');
telMask.mask(inputTel);

const justValidate = new JustValidate('.form');

justValidate
    .addField('.form__input_name', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваше Имя',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Не короче 2 символов',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Слишком длинное имя',
      },
    ])
    .addField('.form__input_surname', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваше Фамилию',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Не короче 2 символов',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Слишком длинное имя',
      },
    ])
    .addField('.form__input_email', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваш email',
      },
      {
        rule: 'email',
        errorMessage: 'email не корректный',
      },
    ])
    .addField('.form__input_tel', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваш телефон',
      },
      {
        validator(value) {
          const phone = inputTel.inputmask.unmaskedvalue();
          return !!(Number(phone) && phone.length === 10);
        },
        errorMessage: 'Телефон не корректный',
      },
    ])
    .onSuccess(event => {
      const target = event.target;
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        halls: target.halls.value,
        gameconsole: target.gameconsole.value,
        boardgame: target.boardgame.value,
        additionally: target.additionally.value,
        date: target.date.value,
        time: target.time.value,
        count: target.count.value,
        name: target.name.value,
        surname: target.surname.value,
        tel: inputTel.inputmask.unmaskedvalue(),
        email: target.email.value,
      })
          .then(response => {
            console.log('response: ', response);
            target.reset();
            fieldset.disabled = true;
            bookingTitle.textContent = `Спасибо Ваша завявка принята, номер заявки ${response.data.id}`;
          })
          .catch(err => {
            console.log('err: ', err);
            target.reset();
            fieldset.disabled = false;
            bookingTitle.textContent = `Что-то пошло не так, попробуйте позже`;
          });
    });

// reviews
new Swiper('.swiper', {

  loop: true,
  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});


// footer карта
ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map('map', {
    center: [55.723157, 37.565084],
    zoom: 17,
  });

  const mark = new ymaps.Placemark([55.723157, 37.565084], {
    hintContent: 'GAME OVER',
    balloonContent: 'GAME OVER - новый формат игр и отдыха',
  }, {
  });

  myMap.geoObjects.add(mark);

  myMap.behaviors.disable('scrollZoom'); // запрещает зум карты колесиком
  myMap.behaviors.disable('drag'); // запрещает скрол свайпом

  myMap.controls.remove('geolocationControl'); // удаляет геолокацию (ваше местоположение)
  myMap.controls.remove('searchControl'); // удаляет гепоиск
  myMap.controls.remove('trafficControl'); // удаляет контроль трафика
  myMap.controls.remove('typeSelector'); // удаляет тип
  myMap.controls.remove('fullscreenControl'); // удаляет переход в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляет контроль зуммирования
  myMap.controls.remove('rulerControl'); // удаляет контроль правил
}

// input date
new AirDatepicker('.form__input_data', {
  // inline: true,
  navTitles: {
    days: '<strong>MMMM</strong>',
  },
  dateFormat: 'dd.MM',
  autoClose: true,
  weekends: [0],
  view: 'days',
  prevHtml: `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 20.0001C37.5 19.6686 37.3683 19.3507 37.1339 19.1162C36.8995 18.8818 36.5815 18.7501 36.25 18.7501H6.7675L14.635 10.8851C14.8697 10.6504 15.0016 10.3321 15.0016 10.0001C15.0016 9.66817 14.8697 9.34983 14.635 9.11511C14.4003 8.8804 14.0819 8.74854 13.75 8.74854C13.4181 8.74854 13.0997 8.8804 12.865 9.11511L2.865 19.1151C2.74859 19.2312 2.65623 19.3692 2.59322 19.521C2.5302 19.6729 2.49776 19.8357 2.49776 20.0001C2.49776 20.1645 2.5302 20.3273 2.59322 20.4792C2.65623 20.6311 2.74859 20.769 2.865 20.8851L12.865 30.8851C13.0997 31.1198 13.4181 31.2517 13.75 31.2517C14.0819 31.2517 14.4003 31.1198 14.635 30.8851C14.8697 30.6504 15.0016 30.3321 15.0016 30.0001C15.0016 29.6682 14.8697 29.3498 14.635 29.1151L6.7675 21.2501H36.25C36.5815 21.2501 36.8995 21.1184 37.1339 20.884C37.3683 20.6496 37.5 20.3316 37.5 20.0001Z"/>
    </svg>
  `,
  nextHtml: `
  <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 20.0001C2.5 19.6686 2.6317 19.3507 2.86612 19.1162C3.10054 18.8818 3.41848 18.7501 3.75 18.7501H33.2325L25.365 10.8851C25.1303 10.6504 24.9984 10.3321 24.9984 10.0001C24.9984 9.66817 25.1303 9.34983 25.365 9.11511C25.5997 8.8804 25.9181 8.74854 26.25 8.74854C26.5819 8.74854 26.9003 8.8804 27.135 9.11511L37.135 19.1151C37.2514 19.2312 37.3438 19.3692 37.4068 19.521C37.4698 19.6729 37.5022 19.8357 37.5022 20.0001C37.5022 20.1645 37.4698 20.3273 37.4068 20.4792C37.3438 20.6311 37.2514 20.769 37.135 20.8851L27.135 30.8851C26.9003 31.1198 26.5819 31.2517 26.25 31.2517C25.9181 31.2517 25.5997 31.1198 25.365 30.8851C25.1303 30.6504 24.9984 30.3321 24.9984 30.0001C24.9984 29.6682 25.1303 29.3498 25.365 29.1151L33.2325 21.2501H3.75C3.41848 21.2501 3.10054 21.1184 2.86612 20.884C2.6317 20.6496 2.5 20.3316 2.5 20.0001Z" />
  </svg>
  
`,
});

// input time
$('.form__input_time').timepicker({
  timeFormat: 'HH:mm',
  interval: 120,
  minTime: '10:00',
  maxTime: '18:00',
  // defaultTime: 'now',
  startTime: '10:00',
  dynamic: false,
  dropdown: true,
  scrollbar: false,
});