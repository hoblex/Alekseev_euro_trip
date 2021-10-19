// //Обработка событий кнопки открытия/закрытия главного меню в мобильном режиме
//
// var navMain = document.querySelector('.header-nav');
// var navToggle = document.querySelector('.header-nav__toggle');
//
// navMain.classList.remove('header-nav--nojs');
// navMain.classList.add('header-nav--closed');
//
//   navToggle.addEventListener('click', function() {
//   if (navMain.classList.contains('header-nav--closed')) {
//   navMain.classList.remove('header-nav--closed');
//   navMain.classList.add('header-nav--opened');
// } else {
//   navMain.classList.add('header-nav--closed');
//   navMain.classList.remove('header-nav--opened');
// }
// });
//
// //Обработка событий модального окна "Заказ товара дня"
//
// var buttonProductToBuy = document.querySelectorAll('.form-to-order');
// var displayModalProductToBuy = document.querySelector('.modal-cart');
//
// for (var i = 0; i < buttonProductToBuy.length; i++) {
//   buttonProductToBuy[i].addEventListener('click', function (evt) {
//     evt.preventDefault();
//     displayModalProductToBuy.classList.add('modal-cart--show');
//   });
// }
//
// window.addEventListener('keydown', function (evt) {
//   if (evt.keyCode === 27) {
//     if (displayModalProductToBuy.classList.contains('modal-cart--show')) {
//       evt.preventDefault();
//       displayModalProductToBuy.classList.remove('modal-cart--show');
//     }
//   }
// });

const placeCardList = Array.from(document.querySelectorAll('.place-card__link'));
const buttonNavList = Array.from(document.querySelectorAll('.slider-nav__button'));
const overviewsList = Array.from(document.querySelectorAll('.overviews__item'));

const changeOverviewsListSlide = (slideIndex) => {
    buttonNavList.forEach((unit, number) => {
        number === slideIndex ? unit.classList.add('slider-nav__button--current') : unit.classList.remove('slider-nav__button--current');
    });
    overviewsList.forEach((elem, index) => index === slideIndex ? elem.classList.add('overviews__item--current') : elem.classList.remove('overviews__item--current'));
}

placeCardList.forEach((item) => item.addEventListener('click', (evt) => {
    const selectedIndex = placeCardList.indexOf(evt.target);
    changeOverviewsListSlide(selectedIndex);
}));

buttonNavList.forEach((item) => item.addEventListener('click', (evt) => {
    const selectedIndex = buttonNavList.indexOf(evt.target);
    changeOverviewsListSlide(selectedIndex);
}));

const modalWindow = document.querySelector('.modal-buy');

const modalWindowClose = modalWindow.querySelector('.modal-buy__close');
const overviewButtonOpenModal = document.querySelector('.overview__order-link');


overviewButtonOpenModal.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalWindow.classList.add('modal-buy--show');
});

const keyDownHandler = function (evt) {
    console.log('sdfsdf');
    const handler = function (event){
        if (event.keyCode === 27) {
            if (modalWindow.classList.contains('modal-buy--show')) {
                evt.preventDefault();
                modalWindow.classList.remove('modal-buy--show');
            }
        }
        document.removeEventListener('keydown', handler);
    }
    return handler;
}

modalWindowClose.addEventListener('click', (evt) => {
    if (modalWindow.classList.contains('modal-buy--show')) {
       evt.preventDefault();
       modalWindow.classList.remove('modal-buy--show');
     }
    document.addEventListener('keydown', keyDownHandler);
});

const modalLabelList = Array.from(modalWindow.querySelectorAll('.modal-buy__form-label'));
const modalInputPhone = modalWindow.querySelector('.modal-buy__form-control[type="tel"]');
const modalInputEmail = modalWindow.querySelector('.modal-buy__form-control[type="email"]');
const modalFormSubmit = modalWindow.querySelector('.modal-buy__form');
const modalLabelError = Array.from(modalWindow.querySelectorAll('.modal-buy__form-control-error'))


modalInputPhone.addEventListener('invalid', (evt) => {
    modalInputPhone.setCustomValidity(' ');
});

modalInputEmail.addEventListener('invalid', (evt) => {
    modalInputEmail.setCustomValidity(' ');
});

modalFormSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();
});

modalFormSubmit.addEventListener('click', (evt) => {
    // const phoneExp = new RegExp("[0-9]{10}");
    // const phoneNumber = modalInputPhone.value;
    // console.log(modalLabelError);
    // if(!phoneExp.test(phoneNumber)) {
    //     modalLabelError[0].style.display = "block";
    // } else {
    //     modalLabelError[0].style.display = "none";
    // }
    //
    // const emailExp = new RegExp("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/");
    // const emailAddress = modalInputEmail.value;
    // if(!emailExp.test(emailAddress)) {
    //     modalLabelError[1].style.display = "block";
    // } else {
    //     modalLabelError[1].style.display = "none";
    // }
});
