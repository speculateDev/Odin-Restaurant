import '../css/style.css';
import '../img/breakfast.svg';
import HomeView from './homeView';
import MenuView from './menuView';
import AboutView from './aboutView';
import ContactView from './contactView';

// Selecting btns
const logoEl = document.querySelector('.header__logo');
const homeEl = document.getElementById('home');
const aboutEl = document.getElementById('about');
const menuEl = document.getElementById('menu');
const contactEl = document.getElementById('contact');

const eventHandler = function () {
  this.render();
};

logoEl.addEventListener('click', eventHandler.bind(HomeView));
homeEl.addEventListener('click', eventHandler.bind(HomeView));
aboutEl.addEventListener('click', eventHandler.bind(AboutView));
menuEl.addEventListener('click', eventHandler.bind(MenuView));
contactEl.addEventListener('click', eventHandler.bind(ContactView));
