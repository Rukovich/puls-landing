
const cards = document.querySelectorAll('.catalogItem');

/*
cards.forEach(card => {
    card.addEventListener('click', () => {
          card.querySelector('.catalogItem__content')
              .classList.toggle('catalogItem__content_active');
          card.querySelector('.catalogItem__list')
              .classList.toggle('catalogItem__list_active');
    }
    )
})
*/


cards.forEach(card => {
  if (card.className === 'catalogItem__link' ) {
    card.addEventListener('click', () => {

          card.querySelector('.catalogItem__content')
              .classList.toggle('catalogItem__content_active');
          card.querySelector('.catalogItem__list')
              .classList.toggle('catalogItem__list_active');
        }
    )
  }
})
