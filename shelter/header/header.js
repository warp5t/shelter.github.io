console.log('check');window.outerHeight
let menuBurger = document.querySelector('.header__menu-burger');
let burger = document.querySelector('.burger');

menuBurger.style.height = window.outerHeight + 'px';

burger.onclick = function(){
  burger.classList.toggle('rotate');
}