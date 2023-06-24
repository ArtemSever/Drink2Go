const navMain = document.querySelector('.main-nav');
const navToogle = document.querySelector('.main-nav__toggle')

navMain.classList.remove('main-nav--nojs');

const openCloseMenu = () => {
  navToogle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
};

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

const map = L.map('map').setView([59.96812, 30.31770], 18);
const locationPicture = document.querySelector('.map__picture')

locationPicture.classList.remove('map__picture--nojs');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const leafletIcon = L.icon ({
  iconUrl: ('../img/icons/stack.svg#map-pin'),
  iconSize: [38, 50]
})

const marker = L.marker([59.96828, 30.31744],{icon:leafletIcon}).addTo(map);

swiper;
map;
marker;
openCloseMenu();
