const root = document.documentElement;
const playButton = document.querySelector('.page__play');
const audio = document.querySelector('.page__audio');
const volumeButton = document.querySelector('.page__volume');

const audioContext = new AudioContext();
const track = audioContext.createMediaElementSource(audio);
const gainKnob = audioContext.createGain();

const onPlayAudio = (evt) => {
  evt.preventDefault();
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
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
  const isChecked = volumeButton.getAttribute('aria-checked') === 'true';
  volumeButton.setAttribute('aria-checked', !isChecked)
  evt.target.matches('.page__volume--mute') 
  ? gainKnob.gain.value = 1 
  : gainKnob.gain.value = 0;
  volumeButton.classList.toggle('page__volume--mute');
};

track.connect(gainKnob).connect(audioContext.destination);

playButton.addEventListener('click', onPlayAudio, {once: true});
playButton.addEventListener('click', onPlayButtonClick);
volumeButton.addEventListener('click', onVolumeButtonClick);
