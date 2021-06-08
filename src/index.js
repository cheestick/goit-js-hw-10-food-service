import menuTmp from './template-menu-item.hbs';
import menuData from './menu.json';
console.log(menuTmp);
console.log(menuData);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('afterbegin', menuTmp(menuData));
