
let cards = document.querySelectorAll('.carousel__card');
let containerCards = document.querySelector('.carousel__mover');

let arrOrder = [1,2,3,4,5,6,7,8];
let arrOrderLong = [],arrOrderChange = [];

// -------------------------- PAGINATION ----------------------------

function shuffle(array) {
  for(let j = 0; j < 6; j++){
   for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(arrOrder,' - arrOrder');
    for(let q = 0; arrOrder.length > q; q++){
      arrOrderChange[q] = arrOrder[q] + (j * 8);
    }
    arrOrderLong = arrOrderLong.concat(arrOrderChange);
  }
  console.log(arrOrderLong, ' - arrOrderLong');
}

shuffle(arrOrder);

function appending(){
  for(let q = 0; q < 5; q++){
    for(let i = 0; cards.length > i; i++){
      let clone;
      clone = cards[i].cloneNode(true);
      containerCards.prepend(clone);
  }
  }
  cards = document.querySelectorAll('.carousel__card');

}

appending();

function ordering(collection){
  for(let i = 0; collection.length > i; i++){
    collection[i].style.order = `${arrOrderLong[i]}`;
  }
}

ordering(cards);



// ----------------------------- POP-UP --------------------------
let photo = document.querySelector('.popUp__photo');
let name = document.querySelector('.popUp__name');
let species = document.querySelector('.popUp__species');
let about = document.querySelector('.popUp__about');
let age = document.querySelector('.pop__age-term');
let inocul = document.querySelector('.popUp__inocul-term');
let disease = document.querySelector('.popUp__disease-term');
let parasite = document.querySelector('.popUp__parasite-term');
const close = document.querySelector('.popUp__close');
let body = document.getElementById('body');
let visible = document.querySelector('.tech-visible');
let popUp  = document.querySelector('.carousel__popUp');


close.onclick = function(){
  console.log('check');
  popUp.classList.remove('tech-visible');
  document.body.style.overflow = 'initial';
}

const petsInfo = {
  jeName:'Jennifer',
  jeSp:'Dog - Labrador',
  jeAbout:"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  jeAge:'2 months',
  jeInoc: 'none',
  jeDis: 'none',
  jeParas: 'none',
  jeSrc: 'section-1/pets-jennifer.png',

  soName:'Sophia',
  soSp:'Dog - Shih tzu',
  soAbout:"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
  soAge:'1 months',
  soInoc: 'none',
  soDis: 'parvovirus',
  soParas: 'none',
  soSrc: 'section-1/pets-sofa.jpg',

  woName:'Woody',
  woSp:'Dog - Golden Retriever',
  woAbout:"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
  woAge:'3 years 6 months',
  woInoc: 'adenovirus, distemper',
  woDis: 'right back leg mobility reduced',
  woParas: 'none',
  woSrc: 'section-1/pets-woody.png',

  scName:'Scarlett',
  scSp:'Dog - Jack Russell Terrier',
  scAbout:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
  scAge:'3 months',
  scInoc: 'parainfluenza',
  scDis: 'none',
  scParas: 'none',
  scSrc: 'section-1/pets-scarlet.png',

  kaName:'Katrine',
  kaSp:'Cat - British Shorthair',
  kaAbout:"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
  kaAge:'6 months',
  kaInoc: 'panleukopenia',
  kaDis: 'none',
  kaParas: 'none',
  kaSrc: 'section-1/pets-katrine.png',

  tiName:'Timmy',
  tiSp:'Cat - British Shorthair',
  tiAbout:"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
  tiAge:'2 years 3 months',
  tiInoc: 'calicivirus, viral rhinotracheitis',
  tiDis: 'kidney stones',
  tiParas: 'none',
  tiSrc: 'section-1/pets-timmy.png',

  frName:'Freddie',
  frSp:'Cat - British Shorthair',
  frAbout:"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
  frAge:'2 months',
  frInoc: 'rabies',
  frDis: 'none',
  frParas: 'none',
  frSrc: 'section-1/pets-fred.png',

  chName:'Charly',
  chSp:'Dog - Jack Russell Terrier ',
  chAbout:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
  chAge:'3 years old',
  chInoc: 'bordetella bronchiseptica, leptospirosis',
  chDis: 'deafness, blindness',
  chParas: 'lice, fleas',
  chSrc: 'section-1/pets-charly.jpg',
};


cards.forEach(function(item,index){
  item.addEventListener('click',function(){
    console.log(item.id);
    popUp.classList.add('tech-visible');
    document.body.style.overflow = 'hidden';
    if(item.id == 'Katrine'){
      photo.src = petsInfo.kaSrc;
      name.innerText = petsInfo.kaName;
      species.innerText = petsInfo.kaSp;
      about.innerText = petsInfo.kaAbout;
      age.innerText = petsInfo.kaAge;
      inocul.innerText = petsInfo.kaInoc;
      disease.innerText = petsInfo.kaDis;
      parasite.innerText = petsInfo.kaParas;
    }
    else if(item.id == 'Jennifer'){
      photo.src = petsInfo.jeSrc;
      name.innerText = petsInfo.jeName;
      species.innerText = petsInfo.jeSp;
      about.innerText = petsInfo.jeAbout;
      age.innerText = petsInfo.jeAge;
      inocul.innerText = petsInfo.jeInoc;
      disease.innerText = petsInfo.jeDis;
      parasite.innerText = petsInfo.jeParas;
    }
    else if(item.id == 'Woody'){
      photo.src = petsInfo.woSrc;
      name.innerText = petsInfo.woName;
      species.innerText = petsInfo.woSp;
      about.innerText = petsInfo.woAbout;
      age.innerText = petsInfo.woAge;
      inocul.innerText = petsInfo.woInoc;
      disease.innerText = petsInfo.woDis;
      parasite.innerText = petsInfo.woParas;
    }
    else if(item.id == 'Sophia'){
      photo.src = petsInfo.soSrc;
      name.innerText = petsInfo.soName;
      species.innerText = petsInfo.soSp;
      about.innerText = petsInfo.soAbout;
      age.innerText = petsInfo.soAge;
      inocul.innerText = petsInfo.soInoc;
      disease.innerText = petsInfo.soDis;
      parasite.innerText = petsInfo.soParas;
    }
    else if(item.id == 'Timmy'){
      photo.src = petsInfo.tiSrc;
      name.innerText = petsInfo.tiName;
      species.innerText = petsInfo.tiSp;
      about.innerText = petsInfo.tiAbout;
      age.innerText = petsInfo.tiAge;
      inocul.innerText = petsInfo.tiInoc;
      disease.innerText = petsInfo.tiDis;
      parasite.innerText = petsInfo.tiParas;
    }
    else if(item.id == 'Charly'){
      photo.src = petsInfo.chSrc;
      name.innerText = petsInfo.chName;
      species.innerText = petsInfo.chSp;
      about.innerText = petsInfo.chAbout;
      age.innerText = petsInfo.chAge;
      inocul.innerText = petsInfo.chInoc;
      disease.innerText = petsInfo.chDis;
      parasite.innerText = petsInfo.chParas;
    }
    else if(item.id == 'Scarlett'){
      photo.src = petsInfo.scSrc;
      name.innerText = petsInfo.scName;
      species.innerText = petsInfo.scSp;
      about.innerText = petsInfo.scAbout;
      age.innerText = petsInfo.scAge;
      inocul.innerText = petsInfo.scInoc;
      disease.innerText = petsInfo.scDis;
      parasite.innerText = petsInfo.scParas;
    }
    else if(item.id == 'Freddie'){
      photo.src = petsInfo.frSrc;
      name.innerText = petsInfo.frName;
      species.innerText = petsInfo.frSp;
      about.innerText = petsInfo.frAbout;
      age.innerText = petsInfo.frAge;
      inocul.innerText = petsInfo.frInoc;
      disease.innerText = petsInfo.frDis;
      parasite.innerText = petsInfo.frParas;
    }
  })
})

// -------------------- slide move -----------------------------

let leftBtnN = document.querySelector('.our-friends__normal-L');
let leftForce = document.querySelector('.our-friends__force-L');
let rightBtnN = document.querySelector('.our-friends__normal-R');
let rightForce = document.querySelector('.our-friends__force-R');
let carouselMover = document.querySelector('.carousel__mover');
let pageNumber = document.querySelector('.our-friends__number');

let sizeStep = 1240;
let forceStep = 6196;
let permissionP = true;
let timeAnim = 1000;
let numberPage = 1;

window.addEventListener('resize',function(){
  resizing();
})

function apdating(){
  containerCards.style.transitionDuration = timeAnim + 'ms';
}
apdating();

function resizing(){
  if(window.outerWidth <= 1279 && window.outerWidth > 645){
    sizeStep = 622;
    forceStep = 4354;
    numberPage = 1;
    pageNumber.innerText = numberPage;
    availabiling();
    carouselMover.style.left = '5px';
  }
  else if(window.outerWidth <= 645){
    sizeStep = 311;
    forceStep = 4665;
    numberPage = 1;
    pageNumber.innerText = numberPage;
    availabiling();
    carouselMover.style.left = '5px';
  }
  else if(window.outerWidth > 1279){
    sizeStep = 1240;
    forceStep = 6196;
    numberPage = 1;
    pageNumber.innerText = numberPage;
    availabiling();
    carouselMover.style.left = '5px';
  }
}
resizing();

rightBtnN.classList.add('activ-button');
rightForce.classList.add('activ-button');

leftBtnN.addEventListener('mouseover',function(){
  console.log(leftBtnN.className);
  if(numberPage != 1){
    leftBtnN.classList.add('hover-button')
  }
})
leftForce.addEventListener('mouseover',function(){
  if(numberPage != 1){
  leftForce.classList.add('hover-button');
  }
})

rightBtnN.addEventListener('mouseover',function(){
  if(numberPage < 6 && window.outerWidth > 1279){
    rightBtnN.classList.add('hover-button')
  }
})

rightForce.addEventListener('mouseover',function(){
  if(numberPage < 6 && window.outerWidth > 1279){
    rightForce.classList.add('hover-button');
  }
})

leftBtnN.addEventListener('mouseout',function(){
  leftBtnN.classList.remove('hover-button');
})
leftForce.addEventListener('mouseout',function(){
  leftForce.classList.remove('hover-button');
})
rightBtnN.addEventListener('mouseout',function(){
  rightBtnN.classList.remove('hover-button');
})
rightForce.addEventListener('mouseout',function(){
  rightForce.classList.remove('hover-button');
})

leftBtnN.onclick = function(){
  if(numberPage != 1){
  lefting();
  availabiling();
  console.log('leftBtnN');
  }
}
leftForce.onclick = function(){
  if(numberPage != 1){
  forceLefting();
  availabiling();
  console.log('leftForce');
  }
}
rightBtnN.onclick = function(){
  if(!(numberPage == 6 && window.outerWidth > 1279)){
  righting();
  availabiling();
  }
  if((numberPage == 8 && window.outerWidth < 1279 && window.outerWidth > 645)){
  righting();
  availabiling();
  }
  if(numberPage == 16 && window.outerWidth < 645){
  righting();
  availabiling();
  }
  console.log('rigthBtnN');
}

rightForce.onclick = function(){
  if(!(numberPage == 6 && window.outerWidth > 1279)){
     forceRighting();
     availabiling();
    }
    if((numberPage == 8 && window.outerWidth < 1279 && window.outerWidth > 645)){
      forceRighting();
      availabiling();
    }
    if(numberPage == 16 && window.outerWidth < 645){
      forceRighting();
      availabiling();
    }
    console.log('rigthForce');
}

function permissingP(){
  setTimeout(() => {
    permissionP = true;
  }, timeAnim);
}

function righting(){
  if(permissionP == true){
    permissionP = false;
    permissingP();
    let leftCarousel = parseInt(window.getComputedStyle(carouselMover,null).left);
  console.log(leftCarousel);
  carouselMover.style.left = (leftCarousel + (-1)*sizeStep) + 'px';
  pageIncreasing();
  }
}

function lefting(){
  if(permissionP == true){
    permissionP = false;
    permissingP();
    let leftCarousel = parseInt(window.getComputedStyle(carouselMover,null).left);
  console.log(leftCarousel);
  carouselMover.style.left = (leftCarousel + sizeStep) + 'px';
  pageDecreasing();
  }
}

function forceLefting(){
  if(permissionP == true){
    permissionP = false;
    permissingP();
    carouselMover.style.left = 5 + 'px';
    numberPage = 1;
    pageNumber.innerText = numberPage;
  }
}

function forceRighting(){
 if(permissionP == true){
    permissionP = false;
    permissingP();
    carouselMover.style.left = (-1)*forceStep + 'px';
    if(window.outerWidth > 1279){
      numberPage = 6;
      pageNumber.innerText = numberPage;
    }
    else if(window.outerWidth < 1279 && window.outerWidth > 645){
      numberPage = 8;
      pageNumber.innerText = numberPage;
    }
    else if(window.outerWidth < 645){
      numberPage = 16;
      pageNumber.innerText = numberPage;
    }
  }
}

function pageIncreasing(){
 numberPage++;
 pageNumber.innerText = numberPage;
}

function pageDecreasing(){
  numberPage--;
  pageNumber.innerText = numberPage;
}

function availabiling(){
  if(numberPage === 1){
    console.log('term 1');
    leftBtnN.classList.remove('activ-button');
    leftForce.classList.remove('activ-button');
    leftBtnN.classList.remove('hover-button');
    leftForce.classList.remove('hover-button');
  }
   if(numberPage > 1){
    console.log('term 2');
    leftBtnN.classList.add('activ-button');
    leftForce.classList.add('activ-button');
  }
  if(numberPage > 1 && window.outerWidth < 1279){
    console.log('term 9');
    leftBtnN.classList.remove('hover-button');
    leftForce.classList.remove('hover-button');
  }
   if(numberPage == 6 && window.outerWidth > 1279){
    console.log('term 3');
    rightBtnN.classList.remove('activ-button');
    rightForce.classList.remove('activ-button');
    rightBtnN.classList.remove('hover-button');
    rightForce.classList.remove('hover-button');
  }
   if(numberPage < 6 && window.outerWidth > 1279){
    console.log('term 4');
    rightBtnN.classList.add('activ-button');
    rightForce.classList.add('activ-button');
  }
   if(numberPage == 8 && window.outerWidth < 1279 && window.outerWidth > 645){
    console.log('term 5');
    rightBtnN.classList.remove('activ-button');
    rightForce.classList.remove('activ-button');
    rightBtnN.classList.remove('hover-button');
    rightForce.classList.remove('hover-button');
  }
   if(numberPage < 8 && window.outerWidth < 1279 && window.outerWidth > 645){
    console.log('term 6');
    rightBtnN.classList.add('activ-button');
    rightForce.classList.add('activ-button');
  }
   if(numberPage == 16 && window.outerWidth < 645){
    console.log('term 7');
    rightBtnN.classList.remove('activ-button');
    rightForce.classList.remove('activ-button');
    rightBtnN.classList.remove('activ-button');
    rightForce.classList.remove('activ-button');
  }
   if(numberPage < 16 && window.outerWidth < 645){
    console.log('term 8');
    rightBtnN.classList.add('activ-button');
    rightForce.classList.add('activ-button');
  }
}
availabiling();