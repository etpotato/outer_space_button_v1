const root = document.documentElement;
const playButton = document.querySelector('.page__play');
const audio = document.querySelector('.page__audio');
const volumeButton = document.querySelector('.page__volume');

let audioContext = null;
let track = null;
let gainKnob = null;

const onPlayAudio = (evt) => {
  evt.preventDefault();
  const isMuted = volumeButton.getAttribute('aria-checked') === 'true';
  audioContext = new AudioContext();
  track = audioContext.createMediaElementSource(audio);
  gainKnob = audioContext.createGain();

  track.connect(gainKnob).connect(audioContext.destination);

  if (isMuted) gainKnob.gain.value = 0;

  audio.play();
  playButton.setAttribute('aria-checked', 'true');
};

const onPlayButtonClick = (evt) => {
  evt.preventDefault();
  const random = Math.random() * 360;
  root.style.setProperty('--hue', random); 
  root.style.setProperty('--angle', `${random}turn`);
};

const onVolumeButtonClick = (evt) => {
  evt.preventDefault();

  if (gainKnob) {
    evt.target.matches('.page__volume--mute') 
    ? gainKnob.gain.value = 1 
    : gainKnob.gain.value = 0;
  }
  
  const isChecked = volumeButton.getAttribute('aria-checked') === 'true';
  volumeButton.setAttribute('aria-checked', !isChecked)
  volumeButton.classList.toggle('page__volume--mute');
};

playButton.addEventListener('click', onPlayAudio, {once: true});
playButton.addEventListener('click', onPlayButtonClick);
volumeButton.addEventListener('click', onVolumeButtonClick);
