
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

/* popup покупки */
let popupBg_bue = document.querySelector('.popup__bg_bue');
let popup_bue = document.querySelector('.popup_bue');
let openPopupButtons_bue  = document.querySelectorAll('.open-popup_bue')
let closePopupButton_bue = document.querySelector('.close-popup_bue');

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
});

document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  }
});

/* popup покупки */
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

document.addEventListener('click', (e) => {
  if (e.target === popupBg_bue) {
    popupBg_bue.classList.remove('active');
    popup_bue.classList.remove('active');
  }
});
/* popup покупки */