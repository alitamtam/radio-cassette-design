// Click (or press Space / Enter) on the cassette to play or pause the reels.
const cassette = document.querySelector('.cassette');

function togglePlay() {
  const paused = cassette.classList.toggle('paused');
  cassette.setAttribute('aria-pressed', String(!paused));
}

cassette.addEventListener('click', togglePlay);

cassette.addEventListener('keydown', (event) => {
  if (event.key === ' ' || event.key === 'Enter') {
    event.preventDefault();
    togglePlay();
  }
});
