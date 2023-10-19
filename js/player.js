const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')
const audioDiv = document.getElementById('audio')
const progressBar = document.getElementById('progressBar');

// const address = new URLSearchParams(location.search)
// const trackId = address.get('trackId')
// console.log(trackId)



const audio = new Audio();
let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    isPlaying = true;

    // Effettua una richiesta all'API di Deezer
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=lazza")
      // fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + trackId)
      .then(response => response.json())
      .then(data => {
        if (data.data && data.data[0] && data.data[0].preview) {
          audio.src = data.data[0].preview;
          audio.play();
        }
        console.log(data)
        smallCard(data)
      })
      .catch(error => {
        console.error("Errore durante la richiesta a Deezer:", error);
      });
  }
});

pauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
    isPlaying = false;
    audio.pause();
  }
});




