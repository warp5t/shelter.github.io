
const arrPetsInfo = [
  {
    "name": "Jennifer",
    "img": "section-3/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "section-3/pets-sofa.jpg",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "section-3/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "section-3/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "section-3/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "section-3/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "section-3/pets-fred.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "section-3/pets-charly.jpg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
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
let popUp  = document.querySelector('.our-friends__popUp');

const leftBtn = document.querySelector('.box-carousel__button-arrow-L');
const rigthBtn = document.querySelector('.box-carousel__button-arrow-R');

let cardsFriend;
let cardInit = document.querySelector('.box-carousel__card');
let friendPhoto = document.querySelector('.box-carousel__photo');
let friendName = document.querySelector('.box-carousel__name-pet');
let containerCards = document.querySelector('.box-carousel__cards-list');

close.onclick = function(){
  console.log('check');
  popUp.classList.remove('tech-visible');
  document.body.style.overflow = 'initial';
}

leftBtn.onclick = function(){
  console.log('left button');
}
rigthBtn.onclick = function(){
  console.log('right button');
}

function randomating(){
  let arrRand = [];
  let cardClone;
  let rNumber;
    while(arrRand.length != 3){
      cardClone = cardInit.cloneNode(true);
      rNumber = Math.floor(Math.random() * (arrPetsInfo.length));
      if(!arrRand.includes(rNumber)){
        arrRand.push(rNumber);
        cardClone.childNodes[3].innerText = `${arrPetsInfo[rNumber].name}`;
        cardClone.childNodes[1].childNodes[1].src = `${arrPetsInfo[rNumber].img}`;
        cardClone.id = `${arrPetsInfo[rNumber].name}`;
        containerCards.prepend(cardClone);
    }
    }
    cardsFriend = document.querySelectorAll('.box-carousel__card');
}

randomating()

cardsFriend.forEach(function(item){
  item.addEventListener('click', function(){
    popUp.classList.add('tech-visible');
    document.body.style.overflow = 'hidden';
    if(item.id == 'Katrine'){
      photo.src = arrPetsInfo[4].img;
      name.innerText = arrPetsInfo[4].name;
      species.innerText = arrPetsInfo[4].type;
      about.innerText = arrPetsInfo[4].description;
      age.innerText = arrPetsInfo[4].age;
      inocul.innerText = arrPetsInfo[4].inoculations;
      disease.innerText = arrPetsInfo[4].diseases;
      parasite.innerText = arrPetsInfo[4].parasites;
    }
    else if(item.id == 'Jennifer'){
      photo.src = arrPetsInfo[0].img;
      name.innerText = arrPetsInfo[0].name;
      species.innerText = arrPetsInfo[0].type;
      about.innerText = arrPetsInfo[0].description;
      age.innerText = arrPetsInfo[0].age;
      inocul.innerText = arrPetsInfo[0].inoculations;
      disease.innerText = arrPetsInfo[0].diseases;
      parasite.innerText = arrPetsInfo[0].parasites;
    }
    else if(item.id == 'Woody'){
      photo.src = arrPetsInfo[2].img;
      name.innerText = arrPetsInfo[2].name;
      species.innerText = arrPetsInfo[2].type;
      about.innerText = arrPetsInfo[2].description;
      age.innerText = arrPetsInfo[2].age;
      inocul.innerText = arrPetsInfo[2].inoculations;
      disease.innerText = arrPetsInfo[2].diseases;
      parasite.innerText = arrPetsInfo[2].parasites;
    }
    else if(item.id == 'Sophia'){
      photo.src = arrPetsInfo[1].img;
      name.innerText = arrPetsInfo[1].name;
      species.innerText = arrPetsInfo[1].type;
      about.innerText = arrPetsInfo[1].description;
      age.innerText = arrPetsInfo[1].age;
      inocul.innerText = arrPetsInfo[1].inoculations;
      disease.innerText = arrPetsInfo[1].diseases;
      parasite.innerText = arrPetsInfo[1].parasites;
    }
    else if(item.id == 'Timmy'){
      photo.src = arrPetsInfo[5].img;
      name.innerText = arrPetsInfo[5].name;
      species.innerText = arrPetsInfo[5].type;
      about.innerText = arrPetsInfo[5].description;
      age.innerText = arrPetsInfo[5].age;
      inocul.innerText = arrPetsInfo[5].inoculations;
      disease.innerText = arrPetsInfo[5].diseases;
      parasite.innerText = arrPetsInfo[5].parasites;
    }
    else if(item.id == 'Charly'){
      photo.src = arrPetsInfo[7].img;
      name.innerText = arrPetsInfo[7].name;
      species.innerText = arrPetsInfo[7].type;
      about.innerText = arrPetsInfo[7].description;
      age.innerText = arrPetsInfo[7].age;
      inocul.innerText = arrPetsInfo[7].inoculations;
      disease.innerText = arrPetsInfo[7].diseases;
      parasite.innerText = arrPetsInfo[7].parasites;
    }
    else if(item.id == 'Scarlett'){
      photo.src = arrPetsInfo[3].img;
      name.innerText = arrPetsInfo[3].name;
      species.innerText = arrPetsInfo[3].type;
      about.innerText = arrPetsInfo[3].description;
      age.innerText = arrPetsInfo[3].age;
      inocul.innerText = arrPetsInfo[3].inoculations;
      disease.innerText = arrPetsInfo[3].diseases;
      parasite.innerText = arrPetsInfo[3].parasites;
    }
    else if(item.id == 'Freddie'){
      photo.src = arrPetsInfo[6].img;
      name.innerText = arrPetsInfo[6].name;
      species.innerText = arrPetsInfo[6].type;
      about.innerText = arrPetsInfo[6].description;
      age.innerText = arrPetsInfo[6].age;
      inocul.innerText = arrPetsInfo[6].inoculations;
      disease.innerText = arrPetsInfo[6].diseases;
      parasite.innerText = arrPetsInfo[6].parasites;
    }
  })
})
