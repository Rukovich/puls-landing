
const cards = document.querySelectorAll('.catalogItem');

cards.forEach(card => {
    const list = card.querySelector('.catalogItem__list')
    const content = card.querySelector('.catalogItem__content')

    card.querySelector('.catalogItem__link').onclick = () => {
        content.classList.remove('catalogItem__content_active')
        list.classList.add('catalogItem__list_active')
    }

    card.querySelector('.catalogItem__back').onclick = () => {
        list.classList.remove('catalogItem__list_active')
        content.classList.add('catalogItem__content_active')
    }
})
