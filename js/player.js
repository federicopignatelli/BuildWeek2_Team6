const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')
const audioDiv = document.getElementById('audio')

// const address = new URLSearchParams(location.search)
// const trackId = address.get('trackId')
// console.log(trackId)

// qui creiamo piccola card dinamica
const smallCard = function (card) {
  const divFirst = document.getElementById('brano')
  const div = document.createElement('div')
  div.style.display = 'flex'
  div.style.alignItems = 'center'
  div.innerHTML = ` <div>
    <img src="${card.data[2].album.cover_medium}" alt="" />
  </div>
  <div>
    <h5>${card.data[2].album.title}</h5>
    <p>${card.data[2].artist.name}</p>
  </div>
  <div>
  <button
    aria-checked="false"
    data-testid="add-button"
    class="Button-sc-1dqy6lx-0 jaXpQg control-button control-button-heart"
    aria-label="Salva in La tua libreria"
    data-encore-id="buttonTertiary"
    aria-expanded="false"
  >
    <span
      aria-hidden="true"
      class="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"
      ><svg
        style="fill: hsla(0, 0%, 100%, 0.7)"
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        class="Svg-sc-ytk21e-0 haNxPq"
      >
        <path
          d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"
        ></path></svg
    ></span>
  </button>
</div>`
  divFirst.appendChild(div)
}

const audio = new Audio();
let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    isPlaying = true;

    // Effettua una richiesta all'API di Deezer
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
      // fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + trackId)
      .then(response => response.json())
      .then(data => {
        if (data.data && data.data[2] && data.data[2].preview) {
          audio.src = data.data[2].preview;
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




