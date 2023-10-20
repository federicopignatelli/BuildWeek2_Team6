const address = new URLSearchParams(location.search)
const artistId = address.get('artistid')
console.log(artistId)

// qui mi prendo i riferimenti del dom per i tasti play e pause e progressbar
const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')
const audioDiv = document.getElementById('audio')
const progressBar = document.getElementById('progressBar');
const divPlay = document.getElementById('container')

// creocostante audio con costrutto per il play
const audio = new Audio();
let isPlaying = false;

fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=50`)
    .then((res) => {
        console.log('ok', res)
        if (res.ok) {
            return res.json()
        }
        else {
            throw new Error('ce un errore')
        }
    })
    .then(music => {
        console.log('music', music)
        renderMusic(music)
        renderMusic2(music)
        const start = document.querySelectorAll('.clickTrack')
        start.forEach((start1, index) => {
            start1.addEventListener('click', () => {
                console.log('na merda', start1)
                const song = music.data[index]
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

    .catch(err => {
        console.log('err', err)
    })

// funzione per la prima parte tracklist popolari

const renderMusic = function (song) {
    const musicContainer = document.getElementById('PopularMusic')

    for (let i = 0; i < 5; i++) {
        const newRow = document.createElement('div')
        newRow.classList.add('row', 'mb-3')

        newRow.innerHTML = `<div class="col col-1 p-0">
        <p class="text-white ps-2 d-none d-md-flex" style="text-align: center; padding-top: 15px;">${i + 1}</p>
    </div>
    <div class="col col-3 col-md-3 col-lg-2 col-xxl-1 p-0">
        <img src="${song.data[i].album.cover_small}" alt="img" width="55px">
    </div>
    <div class="col col-7 col-md-7 col-lg-8 col-xxl-9 ps-xxl-4"
        style="line-height: 15px; padding-top: 12px; padding-left: 0px;">
      <div class="row flex-column flex-md-row">
          <div class="col col-6">
          <a href="#" class="clickTrack text-decoration-none"><p class="text-white text-truncate overflow-hidden text-nowrap">${song.data[i].title}</p></a>
          </div>
          <div class="col col-3">
            <p class="text-white opacity-50" style="font-weight: 300; font-size: 14px;">${song.data[i].rank}</p>
          </div>
          <div class="col col-3 d-none d-md-flex ps-2">
            <p class="text-white opacity-50" style="font-weight: 300; font-size: 14px;">${Math.floor(song.data[i].duration / 60)}:${song.data[i].duration % 60}</p>
          </div>
      </div>
    </div>

    <div class="col col-1 pt-3 ps-1">
        <i class="bi bi-three-dots-vertical text-white"></i>
    </div>`

        musicContainer.appendChild(newRow)

    };
}

// funzione per la seconda parte tracklist vedi altro
const renderMusic2 = function (song) {
    const musicContainer = document.getElementById('altro')

    for (let i = 5; i < 10; i++) {
        const newRow = document.createElement('div')
        newRow.classList.add('row', 'mb-3', 'mt-3')

        newRow.innerHTML = `<div class="col col-1 m-0 p-0">
        <p class="text-white ps-2 d-none d-md-flex" style="text-align: center; padding-top: 15px;">${i + 1}</p>
    </div>
    <div class="col col-3 col-md-3 col-lg-2 col-xxl-1 p-0">
        <img src="${song.data[i].album.cover_small}" alt="img" width="55px">
    </div>
    <div class="col col-7 col-md-7 col-lg-8 col-xxl-9 ps-xxl-4"
        style="line-height: 15px; padding-top: 12px; padding-left: 0px;">
      <div class="row flex-column flex-md-row">
          <div class="col col-6">
            <a href="#" class="clickTrack text-decoration-none"><p class="text-white text-truncate overflow-hidden text-nowrap">${song.data[i].title}</p></a>
          </div>
          <div class="col col-3">
            <p class="text-white opacity-50" style="font-weight: 300; font-size: 14px;">${song.data[i].rank}</p>
          </div>
          <div class="col col-3 d-none d-md-flex ps-2">
            <p class="text-white opacity-50" style="font-weight: 300; font-size: 14px;">${Math.floor(song.data[i].duration / 60)}:${song.data[i].duration % 60}</p>
          </div>
      </div>
    </div>

    <div class="col col-1 pt-3 ps-1">
        <i class="bi bi-three-dots-vertical text-white"></i>
    </div>`

        musicContainer.appendChild(newRow)

    };
}

// questa è la fetch per la cover e le immagini
const getInfoByArtist = function () {
    // fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/2/top?limit=50' + artistId)
    //fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/' + artistId + 'top')
    fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/' + artistId)
        .then((res) => {
            console.log('ok', res)
            if (res.ok) {
                return res.json()
            }
            else {
                throw new Error('ce un errore')
            }
        })
        .then(music => {
            console.log('music', music)
            renderCover(music)
            renderIconLiked(music)

        })

        .catch(err => {
            console.log('err', err)
        })
}
getInfoByArtist()


// qui creiamo la parte dinamica della cover
const renderCover = function (music) {
    const rowcover = document.getElementById('header-artist')
    rowcover.innerHTML = `<div class="col col-12 p-0 m-0 d-flex justify-content-center bg-black" 
                     style="position: relative; height: 50vh;">

    <img src="${music.picture_xl}" alt="imgartist"
        style="opacity: 0.6; width: 100%; object-fit: cover; object-position: 0 -50px;">

    <div class="col col-11" style="position: absolute; bottom: 10px; left: 25px;">
        <h1 class="text-white fs-1">${music.name}</h1>
        <p class="text-white">${music.nb_fan} ascoltatori mensili</p>
    </div>
</div>`
}

// qui invece l'iconcina del like
const renderIconLiked = function (data) {
    const containerliked = document.getElementById('musicliked')
    containerliked.innerHTML = `
    <div class="row mt-4 mb-3 mt-md-4 d-none d-md-inline">
                <div class="col">
                    <h3 class="text-white">Brani che ti piacciono</h3>
                </div>
            </div>
            <div class="row d-flex">
                <div class="col col-12 d-flex ps-md-4">
                    <div style="
                    background-image: url('${data.picture_small}');
                    height: 68px;
                    width: 68px;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    border-radius: 100%;
                    position: relative;">

                        <div style="
                    position: absolute; 
                    top: 40px; 
                    right: 3px;
                    width: 25px;
                    height: 25px;
                    background-color: #8bd3a4;
                    border: 3px solid #fff;
                    border-radius: 100%;">
                            <div style="position: relative;">
                                <i class="bi bi-heart-fill text-black"
                                    style="font-size: 10px; position: absolute; top: 4px; left: 4px;"></i>
                            </div>
                        </div>
                    </div>
                    <div class="ms-4 pt-3 pt-md-4" style="line-height: 8px;">
                        <p class="text-white d-md-none">Brani che ti piacciono
                        </p>
                        <p class="text-white opacity-50" style="font-weight: 300; font-size: 14px;">26 brani di ${data.name}
                        </p>
                    </div>
                </div>
            </div>`
}





