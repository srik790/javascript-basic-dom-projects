const array = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 4', 'Item 4', 'Item 4', 'Item 4', 'Item 4', 'Item 4'];
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const rewindButton = document.getElementById('rewind-button');
const slider = document.getElementById('slider');
let currentArrayIndex = 0;
let isPlaying = false;
let intervalId;

function play() {
  isPlaying = true;
  playButton.disabled = true;
  pauseButton.disabled = false;
  intervalId = setInterval(updateSlider, 1000);
}

function pause() {
  isPlaying = false;
  clearInterval(intervalId);
  playButton.disabled = false;
  pauseButton.disabled = true;
}

function rewind() {
  currentArrayIndex--;
  if (currentArrayIndex === array.length) {
    pause();
    rewind();
    return;
  }
  const progress = currentArrayIndex / array.length;
  slider.value = Math.round(progress * 100);
}

function updateSlider() {
    debugger;
  if (currentArrayIndex === array.length) {
    pause();
    rewind();
    return;
  }
  const progress = currentArrayIndex / array.length;
  slider.value = Math.round(progress * 100);
  currentArrayIndex++;
}

playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pause);
rewindButton.addEventListener('click', rewind);
