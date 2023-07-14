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


// const getCart = async () => {
//   await ymaps3.ready;
//   const {
//     YMap,
//     YMapDefaultSchemeLayer,
//     YMapMarker,
//     YMapControls,
//     YMapDefaultFeaturesLayer
// } = ymaps3;

//   // Создание карты
//   const map = new ymaps3.YMap(document.getElementById('map'), {
//     location: {
//       center: [37.565084, 55.723157],
//       zoom: 17,
//     },
//   });
//   // map.addChild(new ymaps3.YMapDefaultSchemeLayer());
//   map.addChild(scheme = new YMapDefaultSchemeLayer());
//   map.addChild(new YMapControls({position: 'right'}));
//   map.addChild(new YMapDefaultFeaturesLayer({id: 'features'}));
//   const marker = new YMapDefaultMarker([37.565084, 55.723157]);
//   map.addChild(marker);
// };

// getCart();



ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map('map', {
    center: [55.723157, 37.565084],
    zoom: 17,
  });

  const mark = new ymaps.Placemark([55.723157, 37.565084], {
    hintContent: 'GAME OVER',
    balloonContent: 'GAME OVER',
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
