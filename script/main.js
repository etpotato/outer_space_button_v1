const documentElement = document.documentElement;
const buttonElement = document.querySelector('button');
const audioElement = document.querySelector('audio');

buttonElement.addEventListener('click', () => {
  const random = Math.random() * 360;
  documentElement.style.setProperty('--hue', random); 
  documentElement.style.setProperty('--angle', `${random}turn`);
  audioElement.play();
  buttonElement.blur();
});