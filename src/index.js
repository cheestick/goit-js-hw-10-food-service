import menuTmp from './template-menu-item.hbs';
import menuData from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('afterbegin', menuTmp(menuData));

const themeSwitcherRef = document.querySelector('#theme-switch-toggle');

themeSwitcherRef.addEventListener('change', themeChangeHandler);

function themeChangeHandler(e) {
  if (e.target.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    localStorage.setItem('theme-checked', e.target.checked);
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    localStorage.setItem('theme-checked', e.target.checked);
  }
}

window.addEventListener('load', loaderHandler);

function loaderHandler() {
  const theme = localStorage.getItem('theme');
  const themeChecked = localStorage.getItem('theme-checked');
  document.body.classList.add(theme);
  themeSwitcherRef.checked = themeChecked === 'true';
}
