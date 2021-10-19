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
const buttonOpenModal = Array.from(document.querySelectorAll('.order-link'));

const modalInputPhone = modalWindow.querySelector('.modal-buy__form-control[type="tel"]');
const modalInputEmail = modalWindow.querySelector('.modal-buy__form-control[type="email"]');
const modalForm = modalWindow.querySelector('.modal-buy__form');
const modalFormSubmitButton = modalWindow.querySelector('.modal-buy__form-submit');
const modalLabelError = Array.from(modalWindow.querySelectorAll('.modal-buy__form-control-error'))

const keyDownHandler = function (evt) {
    const handler = function (event){
        if (event.keyCode === 27) {
            if (modalWindow.classList.contains('modal-buy--show')) {
                modalWindow.classList.remove('modal-buy--show');
                modalForm.reset();
                modalLabelError[0].style.display = "none";
                modalLabelError[1].style.display = "none";
            }
        }
        document.removeEventListener(evt, handler);
    }
    return handler;
}

buttonOpenModal.forEach((item) => {
    item.addEventListener('click', (evt) => {
        evt.preventDefault();
        modalWindow.classList.add('modal-buy--show');
        document.addEventListener('keydown', keyDownHandler('keydown'));
        modalInputPhone.setCustomValidity('');
        modalForm.reset();
        modalLabelError[0].style.display = "none";
        modalLabelError[1].style.display = "none";
    });
})

modalWindowClose.addEventListener('click', (evt) => {
    if (modalWindow.classList.contains('modal-buy--show')) {
       evt.preventDefault();
       modalWindow.classList.remove('modal-buy--show');
        modalForm.reset();
        modalLabelError[0].style.display = "none";
        modalLabelError[1].style.display = "none";
    }
});

modalInputPhone.addEventListener('keydown', keyDownHandler('keydown'));
modalInputEmail.addEventListener('keydown', keyDownHandler('keydown'));

modalInputPhone.addEventListener('input', (evt)=> {
    if(modalInputPhone.validity.patternMismatch || (modalInputPhone.value === '')) {
        modalLabelError[0].style.display = "block";
        modalInputPhone.setCustomValidity('');
    } else {
        modalLabelError[0].style.display = "none";
    }
})

modalInputEmail.addEventListener('input', (evt)=> {
    if(modalInputEmail.validity.typeMismatch) {
        modalLabelError[1].style.display = "block";
    } else {
        modalLabelError[1].style.display = "none";
    }
})

modalFormSubmitButton.addEventListener('click', (evt) => {
    if(modalInputPhone.validity.patternMismatch || (modalInputPhone.value === '')) {
        modalLabelError[0].style.display = "block";
    } else {
        modalLabelError[0].style.display = "none";
    }

    if(modalInputEmail.validity.typeMismatch) {
        modalLabelError[1].style.display = "block";
    } else {
        modalLabelError[1].style.display = "none";
    }
});

modalForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    modalInputPhone.setCustomValidity('');

    modalForm.reset();
    modalWindow.classList.remove('modal-buy--show');
});
