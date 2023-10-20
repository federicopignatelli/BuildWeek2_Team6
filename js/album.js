const navbar = document.getElementById("navbar")
const nameAlbum = document.getElementById("nameAlbum")
const cardContainer = document.getElementById("card-container")
const albumNavbar = document.createElement("div")
const rightNavIcon = document.getElementById("left-icons-navbar")
const barraIconeMedium = document.getElementById("barra-pulsanti")
const agendaSongs = document.getElementById("agenda-songs")
const peopleIconButton = document.getElementById("people-icon")
const sidebar = document.getElementById("side-bar")
const colMiddle = document.getElementById("col-middle")

// qui mi prendo i riferimenti del dom per i tasti play e pause e progressbar
const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')
const audioDiv = document.getElementById('audio')
const progressBar = document.getElementById('progressBar');
const divPlay = document.getElementById('container')

// creocostante audio con costrutto per il play
const audio = new Audio();
let isPlaying = false;

const addressBarContent = new URLSearchParams(location.search)
const albumId = addressBarContent.get("albumId")

fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId)

    .then((response) => {
        hideSpinner()
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Errore")
        }
    })
    .then((obj) => {
        console.log(obj)
        songs(obj)
        const start = document.querySelectorAll('.clickTrack')
        start.forEach((start1, index) => {
            start1.addEventListener('click', () => {
                console.log('na merda', start1)
                const song = obj.data[index]
                console.log(song)
                const divFirst = document.getElementById('brano')
                const div = document.createElement('div')
                div.style.display = 'flex'
                div.style.alignItems = 'center'
                divFirst.innerHTML = ''
                div.innerHTML = ` <div class="col-lg-3 flex-grow-1 ps-2">
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
    .catch((err) => {
        console.log(err)
    })


const header = (obj1) => {

    const header = document.getElementById("header")
    const iconBar = document.getElementById("icon-bar")


    header.innerHTML = `
    <div class="d-none d-md-flex mt-3 mx-4 row">

    <div class="col-4 d-flex align-items-end ps-0">
    <img src="${obj1.cover_xl}" alt="album-image" class="w-100" id="main-album-img">
    </div>

    <div class="col-8 d-flex flex-column justify-content-end pe-0">

    <span class="fw-bold" style="font-size:10px;">ALBUM</span>
    <h1 class="" style="font-size:40px; font-weight:900">${obj1.title}</h1>

    <p class="align-middle mb-0 fw-normal" style="font-size:14px">

    <img class="rounded-circle" style="width:30px" src="${obj1.artist.picture_small}" alt="artist-icon">
    <a class="btn border-0 text-light ps-1 fw-bold pe-0 fw-bold" style="font-size:14px">${obj1.artist.name}</a>
    <span class="align-middle" style="font-size:14px" id="anno-album">· ${obj1.release_date.slice(0, 4)} · </span>
    <span class="">${obj1.nb_tracks} brani,</span>
    <span class="opacity-50">${Math.round(obj1.duration / 60)} min</span>
    <span class="opacity-50">${obj1.duration % 60} sec.</span>

    </p>

    </div>



    </div>
    <div class="d-flex d-md-none justify-content-center">
    <img src="${obj1.cover_xl}" alt="album-image" class="w-50 mt-md-4" id="main-album-img">
    </div>
    
    <div class="mx-4 d-md-none">
    
    <h2 class="mt-4">${obj1.title}</h2>
    
    <div class="">
        <img class="rounded-circle" style="width:30px" src="${obj1.artist.picture_small}" alt="artist-icon">
        <a class="btn border-0 text-light ps-1 fw-bold" style="font-size:14px">${obj1.artist.name}</a>
        <p class="my-3" style="font-size:12px">Album · <span id="anno-album">${obj1.release_date.slice(0, 4)}</span></p>
    </div>
    
    </div>
    `
    iconBar.innerHTML = `
    <div class="d-md-none">
    <a class="text-light border-0 btn fs-5 ps-0"><i class="bi bi-heart"></i></a>
    <a class="text-light border-0 btn fs-5"><i class="bi bi-arrow-down-circle"></i></a>
    <a class="text-light border-0 btn fs-5"><i class="bi bi-three-dots-vertical"></i></a>
    </div>

    <div class="d-md-none">
    <a class="text-light border-0 btn fs-5"><i class="bi bi-shuffle"></i></a>
    <a class="text-light border-0 btn bg-success rounded-circle py-2 px-2"
        style="font-size: 25px;"><i class="bi bi-play-fill d-flex"></i></a>
    </div>
    `
}

const hideSpinner = function () {
    const spinner = document.getElementById('spinner')
    spinner.classList.add('d-none')
}

const songs = (obj1) => {

    albumNavbar.innerHTML = `${obj1.title}`
    albumNavbar.style.fontSize = "12px"
    albumNavbar.style.opacity = "0"
    albumNavbar.classList.add("ms-3")

    rightNavIcon.appendChild(albumNavbar)

    header(obj1)

    barraIconeMedium.innerHTML = `
    <a class="text-light border-0 btn bg-success rounded-circle p-2 me-2"
        style="font-size: 25px;"><i class="bi bi-play-fill d-flex"></i></a>
        <a class="text-light border-0 btn fs-5"><i class="bi bi-heart"></i></a>
        <a class="text-light border-0 btn fs-5"><i class="bi bi-arrow-down-circle"></i></a>
        <a class="text-light border-0 btn fs-5"><i class="bi bi-three-dots"></i></a>
    `

    agendaSongs.innerHTML = `
    <div class="row border-bottom opacity-50 mb-3 pb-1" style="font-size:12px;">
    
    <div class="col-7">

        <span class="me-2">#</span>

        <span class="">TITOLO</span>

    </div>

    <div class="col-3 text-center">RIPRODUZIONI</div>
    
    <div class="col-2 text-end"><i class="bi bi-clock"></i></div>
    
    </div>
    `

    obj1.tracks.data.forEach((objData, i) => {

        const cardSong = document.createElement("div")
        cardSong.classList.add("d-flex", "justify-content-between", "mb-3", "row")
        cardSong.innerHTML = `
        <div class="d-flex align-items-center col-8">

        <div class="d-none d-md-inline pe-3 opacity-50" style="font-size:12px">
        ${i + 1}
        </div>

        <div class="">
        <a class="btn text-start p-0 text-light border-0 clickTrack" href=""><h6 class="fw-bold mb-0">${objData.title}</h6></a>
        <p class="m-0 opacity-50" style="font-size:12px">${objData.artist.name}</p>
        </div>

        </div>

        <div class="d-none d-md-flex col-1 flex-column justify-content-center opacity-50" style="font-size:12px">${objData.rank}</div>

        <div class="col-3 text-end d-flex flex-column justify-content-center">
        <span class="d-none d-md-inline opacity-50" style="font-size:12px">${Math.floor(objData.duration / 60)}:${objData.duration % 60}</span>
        <a class="text-light btn fs-5 border-0 d-md-none text-end px-0" href=""><i class="bi bi-three-dots-vertical"></i></a>
        </div>
        `
        cardContainer.appendChild(cardSong)
    })
}








window.addEventListener("scroll", () => {
    if (window.scrollY > 140) {
        navbar.style.backgroundColor = "rgb(135, 111, 34)"
        navbar.style.boxShadow = "0px 0px 60px black"
        albumNavbar.style.opacity = "1"
    } else {
        navbar.style.boxShadow = ""
        navbar.style.backgroundColor = "rgba(156, 111, 34, 0)"
        albumNavbar.style.opacity = "0"
    }
})

const removeSidebar = () => {
    sidebar.classList.toggle("d-md-flex")
    colMiddle.classList.toggle("col-md-7")
    colMiddle.classList.toggle("col-md-9")
}