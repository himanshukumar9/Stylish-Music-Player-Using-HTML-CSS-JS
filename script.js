const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const equalizerBtn = document.querySelector('.equalizer');
const lyricsBtn = document.querySelector('.lyrics');
const coverArt = document.querySelector('.cover-art img');

let isPlaying = false;

const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
let currentSongIndex = 0;

function playPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

function changeSong(direction) {
    currentSongIndex = (currentSongIndex + direction + songs.length) % songs.length;
    audio.src = songs[currentSongIndex];
    coverArt.src = `demo-song-image-${currentSongIndex + 1}.jpg`;
    if (isPlaying) {
        audio.play();
    }
}

playPauseBtn.addEventListener('click', playPause);
prevBtn.addEventListener('click', () => changeSong(-1));
nextBtn.addEventListener('click', () => changeSong(1));

equalizerBtn.addEventListener('click', () => {
    // Implement your equalizer logic here
    alert('Equalizer button clicked');
});

lyricsBtn.addEventListener('click', () => {
    // Implement your lyrics logic here
    alert('Lyrics button clicked');
});
