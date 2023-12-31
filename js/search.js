const sidebar = document.getElementById("side-bar");
const middle = document.getElementById("col-middle");

const funz = function () {
  sidebar.classList.toggle("d-md-none");
  middle.classList.toggle("col-lg-9");
};

const address = new URLSearchParams(location.search)
// const formulazione = addressBarContent.get('searchId')

const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')
const audioDiv = document.getElementById('audio')
const progressBar = document.getElementById('progressBar');
const divPlay = document.getElementById('container')

// creocostante audio con costrutto per il play
const audio = new Audio();
let isPlaying = false;

const search = function (query) {
  fetch(" https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)

    .then((response) => {
      if (response.ok) {
        console.log("ecco la response", response)
        return response.json()
      } else {
        throw new Error("errore nel Get")
      }
    })

    .then((obj) => {
      console.log("ecco l'oggetto", obj)
      const row = document.getElementById("contenitore")
      row.innerHTML = ""
      for (let i = 0; i < 25; i++) {
        const col = document.createElement("div");
        col.classList.add("col-6", "col-lg-3", "col-md-4");

        const randomNum = Math.round(Math.random() * 25);
        col.innerHTML = `<div class="card bg-black text-white my-2">
     <img
       src="${obj.data[i].artist.picture_medium}"
       class="card-img-top p-3 rounded-circle"
       alt="..."
     />
     <div class="card-body">
     <a href="#" class="clickTrack text-decoration-none text-white"><h5 class="card-title text-truncate overflow-hidden text-nowrap">${obj.data[i].album.title}</h5></a>
       <p class="card-text text-truncate overflow-hidden">${obj.data[i].artist.name}</p>
     </div>
   </div>;`
        row.appendChild(col);
      }
      const start = document.querySelectorAll('.clickTrack')
      start.forEach((start1, index) => {
        start1.addEventListener('click', () => {
          console.log('musica', start1)
          const song = obj.data[index]
          console.log(song)
          const divFirst = document.getElementById('brano')
          const div = document.createElement('div')
          div.style.display = 'flex'
          div.style.alignItems = 'center'
          divFirst.innerHTML = ''
          div.innerHTML = ` <div class="col-md-3 flex-grow-1 ps-2">
    <img src="${song.album.cover_medium}" alt="" />
  </div>
  <div>
    <h6>${song.title}</h6>
    <p>${song.artist.name}</p>
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

          if (song && song.preview) {
            audio.src = song.preview;
            audio.play();
            playBtn.style.display = 'none'
            pauseBtn.style.display = 'block'
            isPlaying = true
            divPlay.classList.remove('d-none')
          }


        })
      })
      playBtn.addEventListener('click', () => {
        if (!isPlaying) {
          playBtn.style.display = 'none'
          pauseBtn.style.display = 'block'
          isPlaying = true
          audio.play()
        }
      })
      // funzione per il pause
      pauseBtn.addEventListener("click", () => {
        if (isPlaying) {
          playBtn.style.display = "block";
          pauseBtn.style.display = "none";
          isPlaying = false;
          audio.pause();
        }
      });
    })
    .catch((error) => {
      console.log("errore", error)
    })
}

const formSearch = document.getElementById('ricerca2')
formSearch.addEventListener('submit', function (e) {
  e.preventDefault()
  const bar = document.getElementById('inputField')
  const calcolo = bar.value
  search(calcolo)
})








