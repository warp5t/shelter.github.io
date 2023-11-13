const arrPetsInfo = [{
    "name": "Jennifer",
    "img": "section-3/pets-jennifer.png",
    "breed": "Dog - Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "section-3/pets-sofa.jpg",
    "breed": "Dog - Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "section-3/pets-woody.png",
    "breed": "Dog - Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "section-3/pets-scarlet.png",
    "breed": "Dog - Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "section-3/pets-katrine.png",
    "breed": "Cat - British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "section-3/pets-timmy.png",
    "breed": "Cat - British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "section-3/pets-fred.png",
    "breed": "Cat - British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "section-3/pets-charly.jpg",
    "breed": "Dog - Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];

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
let popUp = document.querySelector('.our-friends__popUp');

const leftBtn = document.querySelector('.box-carousel__button-arrow-L');
const rigthBtn = document.querySelector('.box-carousel__button-arrow-R');

let cardsFriend = document.querySelectorAll('.box-carousel__card');;
let cardInit = document.querySelector('.box-carousel__card');
let friendPhoto = document.querySelector('.box-carousel__photo');
let friendName = document.querySelector('.box-carousel__name-pet');
let containerCards = document.querySelector('.box-carousel__cards-list');

close.onclick = function () {
  popUp.classList.remove('tech-visible');
  document.body.style.overflow = 'initial';
}

let arrRand = [];
let direction740;
let counterStep = 0;
let duratinon = 1000;
let permissionBtn = true;
let resizePermiss = true;
let sizeMove = 1080;

let collectionCards = [];

function movePermissing() {
  setTimeout(() => {
    permissionBtn = true;
  }, duratinon + 500);
}

function resizePermissing(){
 setTimeout(() => {
  resizePermiss = true;
 }, 500);
}

window.addEventListener('resize', function () {
  if(resizePermiss == true){
    resizePermiss = false;
    autoRun();
    resizePermissing();
  }
})

function autoRun() {
  if(window.outerWidth > 1170){
    randoming();
    setTimeout(() => {
      randoming();
    }, 500);
    sizeMove = 1080;
  }
  else if (window.outerWidth <= 1170 && window.outerWidth > 1055) {
    randoming();
    setTimeout(() => {
      randoming();
    }, 500);
    sizeMove = 920;
  }
else  if (window.outerWidth <= 1055 && window.outerWidth > 740) {
    randoming();
    setTimeout(() => {
      randoming();
    }, 500);
    sizeMove = 614;
  }
else  if (window.outerWidth <= 740){
    randoming();
    setTimeout(() => {
      randoming();
    }, 500);
    sizeMove = 304;
  }
}
autoRun();

if(window.outerWidth > 1055){
  cardsFriend[cardsFriend.length - 1].remove();
}

function cardRemoving(direct) {
  let counter = 0;
  if (window.outerWidth > 1055 && direct == 'left') {
    while (counter <= 2) {
      counter++;
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      cardsFriend[cardsFriend.length - 1].remove();
      arrRand.shift();
    }
  } else if (window.outerWidth > 1055 && direct == 'right') {
    while (counter <= 2) {
      counter++;
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      cardsFriend[0].remove();
      arrRand.shift();
    }
  } else if (window.outerWidth <= 1055 && window.outerWidth > 740 && direct == 'left') {
    while (counter <= 1) {
      counter++;
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      cardsFriend[cardsFriend.length - 1].remove();
      arrRand.shift();
    }
  } else if (window.outerWidth <= 1055 && window.outerWidth > 740 && direct == 'right') {
    while (counter <= 1) {
      counter++;
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      cardsFriend[0].remove();
      arrRand.shift();
    }
  } else if (window.outerWidth <= 740 && direct === 'left') {
    while (counter < 1) {
      counter++;
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      cardsFriend[cardsFriend.length - 1].remove();
      arrRand.shift();
    }
  } else if (window.outerWidth <= 740 && direct === 'right') {
    while (counter < 1) {
      console.log('code 201');
      counter++;
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      cardsFriend[0].remove();
      arrRand.shift();
    }
  }
  cardsFriend = document.querySelectorAll('.box-carousel__card');
}

function cardFilling(direct) {
  if (window.outerWidth > 1055 && direct === 'right') {
    while (cardsFriend.length <= 6) {
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      rNumber = Math.floor(Math.random() * (arrPetsInfo.length));
      cardAdding(rNumber, 'right');
    }
  } else if (window.outerWidth <= 1055 && window.outerWidth > 740 && direct === 'right') {
    while (cardsFriend.length <= 4) {
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      rNumber = Math.floor(Math.random() * (arrPetsInfo.length));
      cardAdding(rNumber, 'right');
    }
  } else if (window.outerWidth > 1055 && direct === 'left') {
    while (cardsFriend.length <= 6) {
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      rNumber = Math.floor(Math.random() * (arrPetsInfo.length));
      cardAdding(rNumber, 'left');
    }
  } else if (window.outerWidth <= 1055 && window.outerWidth > 740 && direct === 'left') {
    while (cardsFriend.length <= 4) {
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      rNumber = Math.floor(Math.random() * (arrPetsInfo.length));
      cardAdding(rNumber, 'left');
    }
  } else if (window.outerWidth <= 740 && direct === 'right') {
    while (cardsFriend.length < 2) {
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      rNumber = Math.floor(Math.random() * (arrPetsInfo.length));
      cardAdding(rNumber, 'right');
    }
  } else if (window.outerWidth <= 740 && direct === 'left') {
    while (cardsFriend.length < 2) {
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      rNumber = Math.floor(Math.random() * (arrPetsInfo.length));
      cardAdding(rNumber, 'left');
    }
  }

}

leftBtn.onclick = function () {
  direction740 = 'left';
  if (permissionBtn === true) {
    movePermissing();
    permissionBtn = false;
    if (counterStep === 0) {
      containerCards.style.transitionDuration = 'unset';
      containerCards.style.left = (-1) * sizeMove + 'px';
      cardFilling('left');
      setTimeout(() => {
        containerCards.style.transitionDuration = duratinon + 'ms';
        containerCards.style.left = 0 + 'px';
      }, 200);
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      counterStep = 1;
    }
    else if (counterStep === 1 || counterStep === 3) {
      containerCards.style.transitionDuration = 'unset';
      containerCards.style.left = (-1) * sizeMove + 'px';
      console.log(arrRand, ' - arrRand');
      cardRemoving('left');
      cardFilling('left');
      setTimeout(() => {
        coinstanceChecking();
      }, 300);
      setTimeout(() => {
        containerCards.style.left = 0 + 'px';
        containerCards.style.transitionDuration = duratinon + 'ms';
      }, 100);
      cardsFriend = document.querySelectorAll('.box-carousel__card');
      counterStep = 1;
    }
    else if (counterStep === 2) {
      containerCards.style.left = 0 + 'px';
      counterStep = 3;
    } else if (counterStep === 4) {
      containerCards.style.left = 0 + 'px';
      counterStep = 1;
    }
  }
}

rigthBtn.onclick = function () {
  direction740 = 'right';
  if (permissionBtn === true) {
    permissionBtn = false;
    movePermissing();
    if (counterStep == 0) {
      containerCards.style.transitionDuration = 'unset';
      cardFilling('right');
      setTimeout(() => {
        containerCards.style.transitionDuration = duratinon + 'ms';
        containerCards.style.left = (-1) * sizeMove + 'px';
      }, 100);
      counterStep = 4;
      cardsFriend = document.querySelectorAll('.box-carousel__card');
    }
    else if (counterStep == 1) {
      containerCards.style.left = (-1) * sizeMove + 'px';
      containerCards.style.transitionDuration = duratinon + 'ms';
      counterStep = 2;
    } else if (counterStep == 3) {
      containerCards.style.left = (-1) * sizeMove + 'px';
      containerCards.style.transitionDuration = duratinon + 'ms';
      counterStep = 2;
    }
    else if (counterStep == 4 || counterStep == 2) {
      containerCards.style.transitionDuration = 'unset';
      containerCards.style.left = 0 + 'px';
      cardRemoving('right');
      cardFilling('right');
      setTimeout(() => {
        coinstanceChecking();
      }, 300);
      setTimeout(() => {
        containerCards.style.transitionDuration = duratinon + 'ms';
        containerCards.style.left = (-1) * sizeMove + 'px';
      }, 100);
      cardsFriend = document.querySelectorAll('.box-carousel__card');
    }
  }
}

function cardAdding(rNumber, direct) {
 // console.log(arrRand, ' - arrRand cardAdding');
 //cardsFriend = document.querySelectorAll('.box-carousel__card');
 // for (let i = 0; cardsFriend.length > i; i++) {
   // if (!cardsFriend[i].id != (arrPetsInfo[rNumber].name)) {
      if (!arrRand.includes(rNumber)) {
        let cardClone;
        cardClone = cardInit.cloneNode(true);
        arrRand.push(rNumber);
        cardClone.childNodes[3].innerText = `${arrPetsInfo[rNumber].name}`;
        cardClone.childNodes[1].childNodes[1].src = `${arrPetsInfo[rNumber].img}`;
        cardClone.id = `${arrPetsInfo[rNumber].name}`;
        
        cardClone.addEventListener('click', function () {
          popUp.classList.add('tech-visible');
          document.body.style.overflow = 'hidden';
          if (cardClone.id == 'Katrine') {
            photo.src = arrPetsInfo[4].img;
            name.innerText = arrPetsInfo[4].name;
            species.innerText = arrPetsInfo[4].breed;
            about.innerText = arrPetsInfo[4].description;
            age.innerText = arrPetsInfo[4].age;
            inocul.innerText = arrPetsInfo[4].inoculations;
            disease.innerText = arrPetsInfo[4].diseases;
            parasite.innerText = arrPetsInfo[4].parasites;
          } else if (cardClone.id == 'Jennifer') {
            photo.src = arrPetsInfo[0].img;
            name.innerText = arrPetsInfo[0].name;
            species.innerText = arrPetsInfo[0].breed;
            about.innerText = arrPetsInfo[0].description;
            age.innerText = arrPetsInfo[0].age;
            inocul.innerText = arrPetsInfo[0].inoculations;
            disease.innerText = arrPetsInfo[0].diseases;
            parasite.innerText = arrPetsInfo[0].parasites;
          } else if (cardClone.id == 'Woody') {
            photo.src = arrPetsInfo[2].img;
            name.innerText = arrPetsInfo[2].name;
            species.innerText = arrPetsInfo[2].breed;
            about.innerText = arrPetsInfo[2].description;
            age.innerText = arrPetsInfo[2].age;
            inocul.innerText = arrPetsInfo[2].inoculations;
            disease.innerText = arrPetsInfo[2].diseases;
            parasite.innerText = arrPetsInfo[2].parasites;
          } else if (cardClone.id == 'Sophia') {
            photo.src = arrPetsInfo[1].img;
            name.innerText = arrPetsInfo[1].name;
            species.innerText = arrPetsInfo[1].breed;
            about.innerText = arrPetsInfo[1].description;
            age.innerText = arrPetsInfo[1].age;
            inocul.innerText = arrPetsInfo[1].inoculations;
            disease.innerText = arrPetsInfo[1].diseases;
            parasite.innerText = arrPetsInfo[1].parasites;
          } else if (cardClone.id == 'Timmy') {
            photo.src = arrPetsInfo[5].img;
            name.innerText = arrPetsInfo[5].name;
            species.innerText = arrPetsInfo[5].breed;
            about.innerText = arrPetsInfo[5].description;
            age.innerText = arrPetsInfo[5].age;
            inocul.innerText = arrPetsInfo[5].inoculations;
            disease.innerText = arrPetsInfo[5].diseases;
            parasite.innerText = arrPetsInfo[5].parasites;
          } else if (cardClone.id == 'Charly') {
            photo.src = arrPetsInfo[7].img;
            name.innerText = arrPetsInfo[7].name;
            species.innerText = arrPetsInfo[7].breed;
            about.innerText = arrPetsInfo[7].description;
            age.innerText = arrPetsInfo[7].age;
            inocul.innerText = arrPetsInfo[7].inoculations;
            disease.innerText = arrPetsInfo[7].diseases;
            parasite.innerText = arrPetsInfo[7].parasites;
          } else if (cardClone.id == 'Scarlett') {
            photo.src = arrPetsInfo[3].img;
            name.innerText = arrPetsInfo[3].name;
            species.innerText = arrPetsInfo[3].breed;
            about.innerText = arrPetsInfo[3].description;
            age.innerText = arrPetsInfo[3].age;
            inocul.innerText = arrPetsInfo[3].inoculations;
            disease.innerText = arrPetsInfo[3].diseases;
            parasite.innerText = arrPetsInfo[3].parasites;
          } else if (cardClone.id == 'Freddie') {
            photo.src = arrPetsInfo[6].img;
            name.innerText = arrPetsInfo[6].name;
            species.innerText = arrPetsInfo[6].breed;
            about.innerText = arrPetsInfo[6].description;
            age.innerText = arrPetsInfo[6].age;
            inocul.innerText = arrPetsInfo[6].inoculations;
            disease.innerText = arrPetsInfo[6].diseases;
            parasite.innerText = arrPetsInfo[6].parasites;
          }
        })
        if (direct == 'left') {
          containerCards.prepend(cardClone);
          cardsFriend = document.querySelectorAll('.box-carousel__card');
        } else if (direct == 'right') {
          containerCards.append(cardClone);
          cardsFriend = document.querySelectorAll('.box-carousel__card');
        }
      }
   // }
  //}
}
function arrFiling() {
  for (let i = 0; arrPetsInfo.length > i; i++) {
    let cardClone;
    cardClone = cardInit.cloneNode(true);
    cardClone.childNodes[3].innerText = `${arrPetsInfo[i].name}`;
    cardClone.childNodes[1].childNodes[1].src = `${arrPetsInfo[i].img}`;
    collectionCards.push(cardClone);
  }
  for (let i = 0; collectionCards.length > i; i++) {
    collectionCards[i].addEventListener('click', function () {
      console.log(collectionCards[i].id);
       popUp.classList.add('tech-visible');
          document.body.style.overflow = 'hidden';
          collectionCards[i].id = arrPetsInfo[i].name;
          if (collectionCards.id == 'Katrine') {
            photo.src = arrPetsInfo[4].img;
            name.innerText = arrPetsInfo[4].name;
            species.innerText = arrPetsInfo[4].breed;
            about.innerText = arrPetsInfo[4].description;
            age.innerText = arrPetsInfo[4].age;
            inocul.innerText = arrPetsInfo[4].inoculations;
            disease.innerText = arrPetsInfo[4].diseases;
            parasite.innerText = arrPetsInfo[4].parasites;
          } else if (collectionCards.id == 'Jennifer') {
            photo.src = arrPetsInfo[0].img;
            name.innerText = arrPetsInfo[0].name;
            species.innerText = arrPetsInfo[0].breed;
            about.innerText = arrPetsInfo[0].description;
            age.innerText = arrPetsInfo[0].age;
            inocul.innerText = arrPetsInfo[0].inoculations;
            disease.innerText = arrPetsInfo[0].diseases;
            parasite.innerText = arrPetsInfo[0].parasites;
          } else if (collectionCards.id == 'Woody') {
            photo.src = arrPetsInfo[2].img;
            name.innerText = arrPetsInfo[2].name;
            species.innerText = arrPetsInfo[2].breed;
            about.innerText = arrPetsInfo[2].description;
            age.innerText = arrPetsInfo[2].age;
            inocul.innerText = arrPetsInfo[2].inoculations;
            disease.innerText = arrPetsInfo[2].diseases;
            parasite.innerText = arrPetsInfo[2].parasites;
          } else if (collectionCards.id == 'Sophia') {
            photo.src = arrPetsInfo[1].img;
            name.innerText = arrPetsInfo[1].name;
            species.innerText = arrPetsInfo[1].breed;
            about.innerText = arrPetsInfo[1].description;
            age.innerText = arrPetsInfo[1].age;
            inocul.innerText = arrPetsInfo[1].inoculations;
            disease.innerText = arrPetsInfo[1].diseases;
            parasite.innerText = arrPetsInfo[1].parasites;
          } else if (collectionCards.id == 'Timmy') {
            photo.src = arrPetsInfo[5].img;
            name.innerText = arrPetsInfo[5].name;
            species.innerText = arrPetsInfo[5].breed;
            about.innerText = arrPetsInfo[5].description;
            age.innerText = arrPetsInfo[5].age;
            inocul.innerText = arrPetsInfo[5].inoculations;
            disease.innerText = arrPetsInfo[5].diseases;
            parasite.innerText = arrPetsInfo[5].parasites;
          } else if (collectionCards.id == 'Charly') {
            photo.src = arrPetsInfo[7].img;
            name.innerText = arrPetsInfo[7].name;
            species.innerText = arrPetsInfo[7].breed;
            about.innerText = arrPetsInfo[7].description;
            age.innerText = arrPetsInfo[7].age;
            inocul.innerText = arrPetsInfo[7].inoculations;
            disease.innerText = arrPetsInfo[7].diseases;
            parasite.innerText = arrPetsInfo[7].parasites;
          } else if (collectionCards.id == 'Scarlett') {
            photo.src = arrPetsInfo[3].img;
            name.innerText = arrPetsInfo[3].name;
            species.innerText = arrPetsInfo[3].breed;
            about.innerText = arrPetsInfo[3].description;
            age.innerText = arrPetsInfo[3].age;
            inocul.innerText = arrPetsInfo[3].inoculations;
            disease.innerText = arrPetsInfo[3].diseases;
            parasite.innerText = arrPetsInfo[3].parasites;
          } else if (collectionCards.id == 'Freddie') {
            photo.src = arrPetsInfo[6].img;
            name.innerText = arrPetsInfo[6].name;
            species.innerText = arrPetsInfo[6].breed;
            about.innerText = arrPetsInfo[6].description;
            age.innerText = arrPetsInfo[6].age;
            inocul.innerText = arrPetsInfo[6].inoculations;
            disease.innerText = arrPetsInfo[6].diseases;
            parasite.innerText = arrPetsInfo[6].parasites;
          }
        })
  }
  cardsFriend = document.querySelectorAll('.box-carousel__card');
}



function coinstanceChecking(){
  let rand;
  cardsFriend = document.querySelectorAll('.box-carousel__card');
  for(let q = 0; cardsFriend.length > q; q++){
    for(let i = q+1; cardsFriend.length > i; i++){
       if(cardsFriend[q].id === cardsFriend[i].id){
        console.log('coinstance',q,cardsFriend[q].id);
        rand = Math.floor(Math.random() * (arrPetsInfo.length));
         let rem = document.getElementById(`${cardsFriend[i].id}`);
         let parent = rem.parentNode;
         collectionCards[rand].id = arrPetsInfo[rand].name;
         parent.replaceChild(collectionCards[rand], rem);
     //  cardList.replaceChild(collectionCards[rand],cardsFriend[i]);
        coinstanceChecking();
       // break;
      }
    }
  }
}

function randoming(){
  containerCards.style.left = '0px';
  let rNumber;
  cardsFriend = document.querySelectorAll('.box-carousel__card');
  if (window.outerWidth > 1055) {
    while (arrRand.length < 3) {
      rNumber = Math.floor(Math.random() * (arrPetsInfo.length));
      cardAdding(rNumber, 'left');
    }
    cardsFriend = document.querySelectorAll('.box-carousel__card');
  }
  else if (window.outerWidth <= 1055 && window.outerWidth > 740) {
    cardsFriend.forEach(function (item) {
      item.remove();
    })
    arrRand.length = 0;
    while (arrRand.length < 2) {
      rNumber = Math.floor(Math.random() * (arrPetsInfo.length));
      cardAdding(rNumber, 'left');
    }
    cardsFriend = document.querySelectorAll('.box-carousel__card');

  }
  else if (window.outerWidth <= 740) {
    cardsFriend.forEach(function (item) {
      item.remove();
    })
    arrRand.length = 0;
    while (arrRand.length < 1) {
      rNumber = Math.floor(Math.random() * (7));
      cardAdding(rNumber, 'left');
    }
    cardsFriend = document.querySelectorAll('.box-carousel__card');
  }
}

randoming();


let limiterLenght = document.querySelector('.box-carousel__limiter-length ');

   limiterLenght.addEventListener('click',function(){
    if(window.outerWidth < 740){
      let index;
      if(direction740 == 'right'){
        index = 1;
      }
      else if(direction740 == 'left'){
        index = 0
      }
      popUp.classList.add('tech-visible');
      document.body.style.overflow = 'hidden';
     if (cardsFriend[index].id == 'Katrine') {
      photo.src = arrPetsInfo[4].img;
      name.innerText = arrPetsInfo[4].name;
      species.innerText = arrPetsInfo[4].breed;
      about.innerText = arrPetsInfo[4].description;
      age.innerText = arrPetsInfo[4].age;
      inocul.innerText = arrPetsInfo[4].inoculations;
      disease.innerText = arrPetsInfo[4].diseases;
      parasite.innerText = arrPetsInfo[4].parasites;
    } else if (cardsFriend[index].id == 'Jennifer') {
      photo.src = arrPetsInfo[0].img;
      name.innerText = arrPetsInfo[0].name;
      species.innerText = arrPetsInfo[0].breed;
      about.innerText = arrPetsInfo[0].description;
      age.innerText = arrPetsInfo[0].age;
      inocul.innerText = arrPetsInfo[0].inoculations;
      disease.innerText = arrPetsInfo[0].diseases;
      parasite.innerText = arrPetsInfo[0].parasites;
    } else if (cardsFriend[index].id == 'Woody') {
      photo.src = arrPetsInfo[2].img;
      name.innerText = arrPetsInfo[2].name;
      species.innerText = arrPetsInfo[2].breed;
      about.innerText = arrPetsInfo[2].description;
      age.innerText = arrPetsInfo[2].age;
      inocul.innerText = arrPetsInfo[2].inoculations;
      disease.innerText = arrPetsInfo[2].diseases;
      parasite.innerText = arrPetsInfo[2].parasites;
    } else if (cardsFriend[index].id == 'Sophia') {
      photo.src = arrPetsInfo[1].img;
      name.innerText = arrPetsInfo[1].name;
      species.innerText = arrPetsInfo[1].breed;
      about.innerText = arrPetsInfo[1].description;
      age.innerText = arrPetsInfo[1].age;
      inocul.innerText = arrPetsInfo[1].inoculations;
      disease.innerText = arrPetsInfo[1].diseases;
      parasite.innerText = arrPetsInfo[1].parasites;
    } else if (cardsFriend[index].id == 'Timmy') {
      photo.src = arrPetsInfo[5].img;
      name.innerText = arrPetsInfo[5].name;
      species.innerText = arrPetsInfo[5].breed;
      about.innerText = arrPetsInfo[5].description;
      age.innerText = arrPetsInfo[5].age;
      inocul.innerText = arrPetsInfo[5].inoculations;
      disease.innerText = arrPetsInfo[5].diseases;
      parasite.innerText = arrPetsInfo[5].parasites;
    } else if (cardsFriend[index].id == 'Charly') {
      photo.src = arrPetsInfo[7].img;
      name.innerText = arrPetsInfo[7].name;
      species.innerText = arrPetsInfo[7].breed;
      about.innerText = arrPetsInfo[7].description;
      age.innerText = arrPetsInfo[7].age;
      inocul.innerText = arrPetsInfo[7].inoculations;
      disease.innerText = arrPetsInfo[7].diseases;
      parasite.innerText = arrPetsInfo[7].parasites;
    } else if (cardsFriend[index].id == 'Scarlett') {
      photo.src = arrPetsInfo[3].img;
      name.innerText = arrPetsInfo[3].name;
      species.innerText = arrPetsInfo[3].breed;
      about.innerText = arrPetsInfo[3].description;
      age.innerText = arrPetsInfo[3].age;
      inocul.innerText = arrPetsInfo[3].inoculations;
      disease.innerText = arrPetsInfo[3].diseases;
      parasite.innerText = arrPetsInfo[3].parasites;
    } else if (cardsFriend[index].id == 'Freddie') {
      photo.src = arrPetsInfo[6].img;
      name.innerText = arrPetsInfo[6].name;
      species.innerText = arrPetsInfo[6].breed;
      about.innerText = arrPetsInfo[6].description;
      age.innerText = arrPetsInfo[6].age;
      inocul.innerText = arrPetsInfo[6].inoculations;
      disease.innerText = arrPetsInfo[6].diseases;
      parasite.innerText = arrPetsInfo[6].parasites;
    }
  }
  })

setTimeout(() => {
    autoRun();
}, 500);
setTimeout(() => {
  randoming();
}, 500);
arrFiling(); 
// limiterLenght.addEventListener('click',function(){
//   console.log('limiter');
// })
// cardsFriend.forEach(function(item){
//   item.addEventListener('click', function(){
//     popUp.classList.add('tech-visible');
//     document.body.style.overflow = 'hidden';
//     console.log(item.id);
//     if(item.id == 'Katrine'){
//       photo.src = arrPetsInfo[4].img;
//       name.innerText = arrPetsInfo[4].name;
//       species.innerText = arrPetsInfo[4].breed;
//       about.innerText = arrPetsInfo[4].description;
//       age.innerText = arrPetsInfo[4].age;
//       inocul.innerText = arrPetsInfo[4].inoculations;
//       disease.innerText = arrPetsInfo[4].diseases;
//       parasite.innerText = arrPetsInfo[4].parasites;
//     }
//     else if(item.id == 'Jennifer'){
//       photo.src = arrPetsInfo[0].img;
//       name.innerText = arrPetsInfo[0].name;
//       species.innerText = arrPetsInfo[0].breed;
//       about.innerText = arrPetsInfo[0].description;
//       age.innerText = arrPetsInfo[0].age;
//       inocul.innerText = arrPetsInfo[0].inoculations;
//       disease.innerText = arrPetsInfo[0].diseases;
//       parasite.innerText = arrPetsInfo[0].parasites;
//     }
//     else if(item.id == 'Woody'){
//       photo.src = arrPetsInfo[2].img;
//       name.innerText = arrPetsInfo[2].name;
//       species.innerText = arrPetsInfo[2].breed;
//       about.innerText = arrPetsInfo[2].description;
//       age.innerText = arrPetsInfo[2].age;
//       inocul.innerText = arrPetsInfo[2].inoculations;
//       disease.innerText = arrPetsInfo[2].diseases;
//       parasite.innerText = arrPetsInfo[2].parasites;
//     }
//     else if(item.id == 'Sophia'){
//       photo.src = arrPetsInfo[1].img;
//       name.innerText = arrPetsInfo[1].name;
//       species.innerText = arrPetsInfo[1].breed;
//       about.innerText = arrPetsInfo[1].description;
//       age.innerText = arrPetsInfo[1].age;
//       inocul.innerText = arrPetsInfo[1].inoculations;
//       disease.innerText = arrPetsInfo[1].diseases;
//       parasite.innerText = arrPetsInfo[1].parasites;
//     }
//     else if(item.id == 'Timmy'){
//       photo.src = arrPetsInfo[5].img;
//       name.innerText = arrPetsInfo[5].name;
//       species.innerText = arrPetsInfo[5].breed;
//       about.innerText = arrPetsInfo[5].description;
//       age.innerText = arrPetsInfo[5].age;
//       inocul.innerText = arrPetsInfo[5].inoculations;
//       disease.innerText = arrPetsInfo[5].diseases;
//       parasite.innerText = arrPetsInfo[5].parasites;
//     }
//     else if(item.id == 'Charly'){
//       photo.src = arrPetsInfo[7].img;
//       name.innerText = arrPetsInfo[7].name;
//       species.innerText = arrPetsInfo[7].breed;
//       about.innerText = arrPetsInfo[7].description;
//       age.innerText = arrPetsInfo[7].age;
//       inocul.innerText = arrPetsInfo[7].inoculations;
//       disease.innerText = arrPetsInfo[7].diseases;
//       parasite.innerText = arrPetsInfo[7].parasites;
//     }
//     else if(item.id == 'Scarlett'){
//       photo.src = arrPetsInfo[3].img;
//       name.innerText = arrPetsInfo[3].name;
//       species.innerText = arrPetsInfo[3].breed;
//       about.innerText = arrPetsInfo[3].description;
//       age.innerText = arrPetsInfo[3].age;
//       inocul.innerText = arrPetsInfo[3].inoculations;
//       disease.innerText = arrPetsInfo[3].diseases;
//       parasite.innerText = arrPetsInfo[3].parasites;
//     }
//     else if(item.id == 'Freddie'){
//       photo.src = arrPetsInfo[6].img;
//       name.innerText = arrPetsInfo[6].name;
//       species.innerText = arrPetsInfo[6].breed;
//       about.innerText = arrPetsInfo[6].description;
//       age.innerText = arrPetsInfo[6].age;
//       inocul.innerText = arrPetsInfo[6].inoculations;
//       disease.innerText = arrPetsInfo[6].diseases;
//       parasite.innerText = arrPetsInfo[6].parasites;
//     }
//   })
// })

