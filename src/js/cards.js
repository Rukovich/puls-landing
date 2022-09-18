
const cards = document.querySelectorAll('.catalogItem');
// const back = document.querySelectorAll('.catalogItem__back');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.catalogItem__content')
        .classList.toggle('catalogItem__content_active');
    card.querySelector('.catalogItem__list')
        .classList.toggle('catalogItem__list_active');
  })
})

