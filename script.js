const video = document.querySelector(".viewer");
const toggleButton = document.querySelector(".player__button");
const volumeSlider = document.querySelector(".volume");
const playbackSpeedSlider = document.querySelector(".playbackSpeed");
const skipButtons = document.querySelectorAll("[data-skip]");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");

// Toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
    toggleButton.textContent = "❚ ❚";
  } else {
    video.pause();
    toggleButton.textContent = "►";
  }
}

// Update progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
}

// Scrub to clicked position
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Update volume
function handleVolume() {
  video.volume = this.value;
}

// Update playback speed
function handlePlaybackSpeed() {
  video.playbackRate = this.value;
}

// Skip video
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleProgress);
toggleButton.addEventListener("click", togglePlay);

volumeSlider.addEventListener("input", handleVolume);
playbackSpeedSlider.addEventListener("input", handlePlaybackSpeed);

skipButtons.forEach(button => button.addEventListener("click", skip));

// Scrub with mouse
let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
