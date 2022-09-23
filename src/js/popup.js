/* popup с заявкой */
const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openPopupButtons = document.querySelectorAll('.open-popup');
const closePopupButton = document.querySelector('.close-popup');

/* popup с покупкой */
const popupBg_bue = document.querySelector('.popup__bg_bue');
const popup_bue = document.querySelector('.popup_bue');
const openPopupButtons_bue  = document.querySelectorAll('.open-popup_bue')
const closePopupButton_bue = document.querySelector('.close-popup_bue');



/* Функции */
function popupRemove (bg, element) {
  bg.classList.remove('active');
  element.classList.remove('active');
}
function popupAdd (bg, element) {
  bg.classList.add('active');
  element.classList.add('active');
}

/* popup с заявкой */
openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupAdd (popupBg, popup);
  })

  document.querySelectorAll('.card-link')
      .forEach(elem2 => elem2.textContent = 'ссылка');

  closePopupButton.addEventListener('click', () => {
    popupRemove (popupBg, popup);
  });
});

/* popup с покупкой */
openPopupButtons_bue.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupAdd (popupBg_bue, popup_bue);
  })
  closePopupButton_bue.addEventListener('click', () => {
    popupRemove (popupBg_bue, popup_bue);
  });
});


/* Меняет название элемента  */
const cards = document.querySelectorAll('.catalogItem');

cards.forEach(card => {
  const subtitle = card.querySelector('.catalogItem__subtitle')
  card.querySelector('.open-popup_bue').onclick = () => {
    let nameEl = subtitle.textContent;
    document.getElementById('name').textContent = nameEl;
  };
})
