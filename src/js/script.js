// const catContent = document.querySelector('.catalogItem__content');
// const catItem = document.querySelector('.catalogItem__list');
// const catBack = document.querySelectorAll('.catalogItem__back');


catalog.onclick = function (event) {
  if (event.target.className != 'catalogItem__back') return;
  let catList = event.target.closest('.catalogItem__list');
  catList.classList.remove('catalogItem__list_active');
  // console.log('1')
};


// catalog.onclick = function (event) {
//   if (event.target.className != 'catalogItem__back') return;
//   let catList = event.target.closest('.catalogItem__content');
//   catList.classList.add('.catalogItem__content_active');
//   // console.log('1')
// };
