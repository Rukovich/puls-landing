
const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openPopupButtons = document.querySelectorAll('.open-popup');
const closePopupButton = document.querySelector('.close-popup');

/* popup с покупкой */
const popupBg_bue = document.querySelector('.popup__bg_bue');
const popup_bue = document.querySelector('.popup_bue');
const openPopupButtons_bue  = document.querySelectorAll('.open-popup_bue')
const closePopupButton_bue = document.querySelector('.close-popup_bue');

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
  })
});

closePopupButton.addEventListener('click', () => {
  popupBg.classList.remove('active');
  popup.classList.remove('active');
  popupBg_bue.classList.remove('active'); //popup с покупкой
  popup_bue.classList.remove('active'); //popup с покупкой
});

document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  }
});

/* popup с покупкой */
openPopupButtons_bue.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg_bue.classList.add('active');
    popup_bue.classList.add('active');
  })
});

closePopupButton_bue.addEventListener('click', () => {
  popupBg_bue.classList.remove('active');
  popup_bue.classList.remove('active');
});
/* popup покупки */