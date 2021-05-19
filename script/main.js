const root = document.documentElement;
const playButton = document.querySelector('.page__play');
const audio = document.querySelector('.page__audio');
const volumeButton = document.querySelector('.page__volume');

playButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const random = Math.random() * 360;
  root.style.setProperty('--hue', random); 
  root.style.setProperty('--angle', `${random}turn`);
  audio.play();
});

volumeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  evt.target.matches('.page__volume--mute') ? audio.volume = 1 : audio.volume = 0;
  volumeButton.classList.toggle('page__volume--mute');
});