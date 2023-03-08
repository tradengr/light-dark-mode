const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const toggleSwitchElement = document.querySelector('input[type="checkbox"]');
const navElement = document.querySelector('#nav');
const image1Element = document.querySelector('#image1');
const image2Element = document.querySelector('#image2');
const image3Element = document.querySelector('#image3');
const textBoxElement = document.querySelector('#text-box');
const toggleIconElement = document.querySelector('#toggle-icon');

// Assigns the image file depending on light/dark mode
function imageMode(mode) {
  image1Element.src = `img/undraw_proud_coder_${mode}.svg`;
  image2Element.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3Element.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

function toggleDarkLightMode(mode) {
  if (mode === 'dark') {
    navElement.style.background = 'rgb(0 0 0 / 50%)';
    textBoxElement.style.background = 'rgb(255 255 255 / 50%)';
    toggleIconElement.children[0].textContent = 'Dark Mode';
    toggleIconElement.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode(mode);
    localStorage.setItem('theme', mode);
  } else if (mode === 'light') {
    navElement.style.background = 'rgb(255 255 255 / 50%)';
    textBoxElement.style.background = 'rgb(0 0 0 / 50%)';
    toggleIconElement.children[0].textContent = 'Light Mode';
    toggleIconElement.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode(mode);
    localStorage.setItem('theme', mode);
  }
}

function toggleMode(event) {
  if (event.target.checked) {
    // Selects the html element
    document.documentElement.setAttribute('data-theme', DARK_THEME);
    toggleDarkLightMode(DARK_THEME);
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    toggleDarkLightMode(LIGHT_THEME);
  }
}

let currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  if (currentTheme === DARK_THEME) {
    toggleDarkLightMode(DARK_THEME);
    toggleSwitchElement.checked = true;
  } else if (currentTheme === LIGHT_THEME) {
    toggleDarkLightMode(LIGHT_THEME);
    toggleSwitchElement.checked = false;
  }
}

toggleSwitchElement.addEventListener('change', toggleMode);