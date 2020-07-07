const documentElement = document.documentElement;
const bodyElement = document.querySelector('body');
const buttonElement = bodyElement.querySelector('button');

buttonElement.addEventListener('click', () => {
  const random = Math.random() * 360;
  documentElement.style.setProperty('--hue', random); 
  documentElement.style.setProperty('--angle', `${random}turn`);
  buttonElement.blur();
});