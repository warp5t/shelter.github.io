
let menuBurger = document.querySelector('.header__menu-burger');
let burger = document.querySelector('.burger');
let contact = document.getElementById('contacts');
let helpLink = document.getElementById('helpLink');
let pets = document.getElementById('pets');
let classBody = document.querySelector('.body');
let shadow = document.querySelector('.shadow');

menuBurger.style.height = window.outerHeight + 'px';
window.addEventListener('resize',function(){
  menuBurger.style.height = window.outerHeight + 'px';
})

function activateBurger(){
  burger.classList.toggle('rotate');
  menuBurger.classList.toggle('shift');
  classBody.classList.toggle('body-block-scroll');
  shadow.classList.toggle('shadow-activ');
}

burger.onclick = activateBurger;

contact.onclick = activateBurger;
helpLink.onclick = activateBurger;
pets.onclick = activateBurger;
shadow.onclick = activateBurger;


window.onload = function() {
  var links = document.querySelectorAll('a');  

  links.forEach(function (item) {
    item.addEventListener('click', onLinkClicked);

    function onLinkClicked(event) {
      event.preventDefault();
      setTimeout(onAnimationComplete, 500);
    }

    function onAnimationComplete() {
      window.location = item.href;
    }
  });
}