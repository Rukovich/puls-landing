
catalog.onclick = function (event) {
  if (event.target.className != 'catalogItem__back') return;
  let catList = event.target.closest('.catalogItem__list');
  catList.classList.remove('catalogItem__list_active');
};

/*
Здесь я пытался написать событие которое при нажатии на класс
.catalogItem__back будет добавлять к классу .catalog__content
 класс catalog__content_active
*/