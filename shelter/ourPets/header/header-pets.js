
let menuBurgerPets = document.querySelector('.header__menu-burger');
let burgerPets = document.querySelector('.burger');
let contactPets = document.getElementById('contacts');
let helpLinkPets = document.getElementById('helpLink');
let petsPets = document.getElementById('pets');
let classBody = document.querySelector('.body');
let shadowPets = document.querySelector('.shadow-pets');

menuBurgerPets.style.height = window.outerHeight + 'px';
window.addEventListener('resize',function(){
  menuBurgerPets.style.height = window.outerHeight + 'px';
})

function activateBurgerPets(){
  burgerPets.classList.toggle('rotate');
  menuBurgerPets.classList.toggle('shift');
  classBody.classList.toggle('body-block-scroll');
  shadowPets.classList.toggle('shadow-activ-pets');
}

burgerPets.onclick = activateBurgerPets;

contactPets.onclick = activateBurgerPets;
helpLinkPets.onclick = activateBurgerPets;
petsPets.onclick = activateBurgerPets;
shadowPets.onclick = activateBurgerPets;


window.onload = function() {
  var links = document.querySelectorAll('a');

  links.forEach(function (item) {
    item.addEventListener('click', onLinkClickedPets);

    function onLinkClickedPets(event) {
      event.preventDefault();
      setTimeout(onAnimationCompletePets, 500);
    }

    function onAnimationCompletePets() {
      window.location = item.href;
    }
  });
}